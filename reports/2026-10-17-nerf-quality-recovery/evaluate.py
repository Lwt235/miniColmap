"""Evaluate actual checkpoints at identical cameras/resolutions, without image enhancement."""
import csv
import json
import math
from pathlib import Path

import cv2
import numpy as np
import torch

from minicolmap.rendering.algorithms import build_nerf
from minicolmap.rendering.config import resolve_render_config
from minicolmap.rendering.data import load_training_scene
from minicolmap.rendering.pipeline import _frame_record, _render


def psnr(mse):
    return -10*math.log10(max(float(mse),1e-12))


def contour(reference, prediction):
    # Photometric diagnostic only, not an annotated semantic silhouette.
    gt=np.max(reference,axis=-1)>.15
    pred=np.max(prediction,axis=-1)>.15
    iou=float(np.sum(gt&pred)/max(np.sum(gt|pred),1))
    kernel=np.ones((3,3),dtype=np.uint8)
    ge=gt & ~cv2.erode(gt.astype(np.uint8),kernel).astype(bool)
    pe=pred & ~cv2.erode(pred.astype(np.uint8),kernel).astype(bool)
    precision=np.sum(pe & cv2.dilate(ge.astype(np.uint8),kernel).astype(bool))/max(np.sum(pe),1)
    recall=np.sum(ge & cv2.dilate(pe.astype(np.uint8),kernel).astype(bool))/max(np.sum(ge),1)
    f1=float(2*precision*recall/max(precision+recall,1e-12))
    return iou,f1,float(np.mean((prediction[gt]-reference[gt])**2))


def make_gallery(path, frames, columns, ids):
    width,height=320,240
    canvas=np.full((40+268*len(ids),width*len(columns),3),24,dtype=np.uint8)
    for col,(title,_) in enumerate(columns):
        cv2.putText(canvas,title,(col*width+8,26),cv2.FONT_HERSHEY_SIMPLEX,.6,(240,240,240),1,cv2.LINE_AA)
    for row,image_id in enumerate(ids):
        for col,(_,images) in enumerate(columns):
            rgb=frames[image_id].rgb if images is None else images[image_id]
            pixels=cv2.resize(np.round(np.clip(rgb,0,1)*255).astype(np.uint8)[...,::-1],(width,height),interpolation=cv2.INTER_NEAREST)
            y=40+row*268; x=col*width
            canvas[y:y+height,x:x+width]=pixels
            text=f'View {image_id}' if images is None else f'View {image_id} / {psnr(np.mean((rgb-frames[image_id].rgb)**2)):.2f} dB'
            cv2.putText(canvas,text,(x+8,y+height+20),cv2.FONT_HERSHEY_SIMPLEX,.5,(230,230,230),1,cv2.LINE_AA)
    assert cv2.imwrite(str(path),canvas)


def main():
    torch.set_num_threads(1)
    root=Path(__file__).resolve().parents[2]; report=Path(__file__).resolve().parent
    meta=json.loads((report/'final-run.json').read_text(encoding='utf-8'))
    final=Path(meta['output_path'])
    if not (final/'summary.json').exists():
        raise SystemExit('Final training is still in progress; evaluate only a complete checkpoint.')
    config=resolve_render_config(json.loads((final/'config.json').read_text()))
    status=json.loads((final/'run_status.json').read_text())
    cases={'failed':root/'outputs/ui_nerf_20261017_223335_35d5f4',
           'low_lr':root/'outputs/review_nerf_deep_lr1e4_20261017', 'recovered':final}
    models={};configs={};checkpoints={}
    for name,folder in cases.items():
        cp=torch.load(folder/'checkpoint.pt',map_location='cpu',weights_only=True)
        c=resolve_render_config(cp['config']);nc=c['nerf']
        net=build_nerf(nc['levels_xyz'],nc['levels_dir'],nc['hidden_dim']).cuda().eval()
        net.load_state_dict(cp['state']);models[name]=net;configs[name]=c;checkpoints[name]=cp
    rows=[];summary={}; native_images={}
    for downscale in (4,8):
        scene=load_training_scene(final/'source_model.json',status['dataset'],dict(config,image_downscale=downscale))
        size=f'{scene.frames[scene.validation_ids[0]].width}x{scene.frames[scene.validation_ids[0]].height}'
        for name,net in models.items():
            images={};case_rows=[]
            with torch.no_grad():
                for image_id in scene.validation_ids:
                    frame=scene.frames[image_id]
                    rgb=_render(net,None,_frame_record(frame),configs[name],torch,'cuda').cpu().numpy()
                    assert np.isfinite(rgb).all()
                    iou,f1,fg_mse=contour(frame.rgb,rgb)
                    mse=float(np.mean((rgb-frame.rgb)**2))
                    row=dict(case=name,resolution=size,image_id=image_id,mse=mse,psnr=psnr(mse),
                             brightness_mask_iou=iou,boundary_f1_1px=f1,brightness_foreground_mse=fg_mse)
                    rows.append(row);case_rows.append(row);images[image_id]=rgb
            mse=float(np.mean([r['mse'] for r in case_rows]))
            summary[f'{name}_{size}']=dict(mse=mse,psnr=psnr(mse),
                mean_brightness_mask_iou=float(np.mean([r['brightness_mask_iou'] for r in case_rows])),
                mean_boundary_f1_1px=float(np.mean([r['boundary_f1_1px'] for r in case_rows])),
                mean_brightness_foreground_mse=float(np.mean([r['brightness_foreground_mse'] for r in case_rows])))
            if downscale==4: native_images[name]=images
            print(json.dumps({f'{name}_{size}':summary[f'{name}_{size}']}),flush=True)
        if downscale==4:
            native_scene=scene
            errors=[]
            with torch.no_grad():
                for image_id in scene.train_ids:
                    frame=scene.frames[image_id]
                    rgb=_render(models['recovered'],None,_frame_record(frame),config,torch,'cuda').cpu().numpy()
                    errors.append(float(np.mean((rgb-frame.rgb)**2)))
            summary['training_160x120']=dict(mse=float(np.mean(errors)),psnr=psnr(np.mean(errors)))
    frames=native_scene.frames
    make_gallery(report/'comparison.png',frames,[('Reference',None),('Previous low LR',native_images['low_lr']),('Recovered NeRF',native_images['recovered'])],[4,16,28,36,44])
    make_gallery(report/'all-validation.png',frames,[('Reference',None),('Recovered NeRF',native_images['recovered'])],native_scene.validation_ids)
    make_gallery(report/'preview.png',frames,[('Reference',None),('Previous low LR',native_images['low_lr']),('Recovered NeRF',native_images['recovered'])],[16])
    # Compare CPU/GPU on an independently calibrated low-resolution camera.
    small=load_training_scene(final/'source_model.json',status['dataset'],dict(config,image_downscale=16))
    frame=small.frames[4];net=models['recovered']
    with torch.no_grad():
        gpu=_render(net,None,_frame_record(frame),config,torch,'cuda').cpu().numpy()
        net.cpu()
        cpu=_render(net,None,_frame_record(frame),config,torch,'cpu').numpy()
    summary['checkpoint_cpu_cuda_max_rgb_difference']=float(np.max(np.abs(cpu-gpu)))
    np.testing.assert_allclose(cpu,gpu,atol=1e-4,rtol=1e-4)
    saved=json.loads((final/'summary.json').read_text())['metrics']['validation_mse']
    summary['saved_summary_mse_difference']=abs(summary['recovered_160x120']['mse']-saved)
    assert summary['saved_summary_mse_difference']<1e-6
    with (report/'per-view.csv').open('w',newline='',encoding='utf-8') as stream:
        writer=csv.DictWriter(stream,fieldnames=list(rows[0]));writer.writeheader();writer.writerows(rows)
    (report/'quality.json').write_text(json.dumps(summary,indent=2),encoding='utf-8')
    print(json.dumps(summary,indent=2),flush=True)


if __name__=='__main__':
    main()

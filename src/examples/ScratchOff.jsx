import React, { useEffect } from 'react';
import { getCanvasContext } from '../utils/canvas';
const render = ctx => {
  ctx.fillStyle = '#ccc';
  ctx.fillRect(0, 0, 400, 100);
  ctx.fillStyle = '#fff';
  ctx.font = '24px serif';
  ctx.fillText('刮刮卡', 164, 62);
}

const createScratch = ctx => {
  if (!ctx) throw new Error('ctx is null!')
  ctx = canvas.getContext('2d')
  render(ctx)
}


const ScratchOff = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas');
    let ctx = getCanvasContext(canvas);
    createScratch(ctx);

    let isDraw = false;
    canvas.onmousedown = function () {
      isDraw = true;
    }
    canvas.onmousemove = function (e) {
      if (!isDraw) return;
      const x = e.pageX - canvas.offsetLeft;
      const y = e.pageY - canvas.offsetTop;
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, 10, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();
    }
    canvas.onmouseup = function () {
      isDraw = false;
    }
  }, [])
  return (
    <div className="box">
      <canvas id="canvas" width="400" height="100">
        当前浏览器不支持canvas元素, 请升级或更换浏览器!
      </canvas>
      <div className="text">
        恭喜你🎉 没中奖
      </div>
    </div>
  )
}

export default ScratchOff;

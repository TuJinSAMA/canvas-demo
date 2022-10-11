import './style/index.styl';

const canvas = document.getElementById('canvas');

console.dir(canvas);
if (canvas.getContext) {
  const ctx = canvas.getContext('2d');
  console.log(ctx);
  // 设置中心点
  ctx.translate(300, 300);
  ctx.save();
  // 画圆线用arc()函数
  // 画大圆
  ctx.beginPath();
  // arc(中心点x，中心点y，半径，起始角度，结束角度)
  ctx.arc(0, 0, 100, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();

  // 画小圆
  ctx.beginPath();
  ctx.arc(0, 0, 5, 0, 2 * Math.PI);
  // 用线绘制出当前路径
  ctx.stroke();
  ctx.closePath();

  // 绘制分/秒刻度
  ctx.lineWidth = 1;
  for (let i = 0; i < 60; i++) {
    ctx.rotate(2 * Math.PI / 60);
    ctx.beginPath();
    ctx.moveTo(90, 0);
    ctx.lineTo(100, 0);
    ctx.stroke();
    ctx.closePath();
  }
  ctx.restore();
  ctx.save();

  // 绘制时刻度
  ctx.lineWidth = 5;
  for (let i = 0; i < 12; i++) {
    ctx.rotate(2 * Math.PI / 12);
    ctx.beginPath();
    ctx.moveTo(85, 0);
    ctx.lineTo(100, 0);
    ctx.stroke();
    ctx.closePath();
  }
  ctx.restore();
  ctx.save();
  
}
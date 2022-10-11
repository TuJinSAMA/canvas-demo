import './style/index.styl';

const canvas = document.getElementById('canvas');

console.dir(canvas);
if (canvas.getContext) {
  const ctx = canvas.getContext('2d');
  console.log(ctx);
  // 设置中心点
  ctx.translate(300, 300);
  // 画圆线用arc()函数
  // 画大圆
  ctx.beginPath();
  // arc(中心点x，中心点y，半径，起始角度，结束角度)
  ctx.arc(0, 0, 100, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(0, 0, 5, 0, 2 * Math.PI);
  // 用线绘制出当前路径
  ctx.stroke();
  ctx.closePath();

  
}
export const createClock = (ctx) => {
  if (!ctx) throw new Error('ctx is null!')
  ctx = canvas.getContext('2d');
  setInterval(() => {
    ctx.save();
    ctx.clearRect(0, 0, 600, 600);
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
    // 获取当前时间
    let time = new Date();
    let hour = time.getHours() % 12;
    let min = time.getMinutes();
    let sec = time.getSeconds();
    console.log(hour, min, sec);

    // 时针
    ctx.rotate(- Math.PI / 2 + 2 * Math.PI / 12 * hour + 2 * Math.PI / 12 * (min / 60));
    ctx.beginPath();
    ctx.moveTo(-10, 0);
    ctx.lineTo(40, 0);
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
    ctx.save();

    // 分针
    ctx.rotate(- Math.PI / 2 + 2 * Math.PI / 60 * min + 2 * Math.PI / 60 * (sec / 60));
    ctx.beginPath();
    ctx.moveTo(-10, 0);
    ctx.lineTo(60, 0);
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'blue';
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
    ctx.save();

    // 秒针
    ctx.rotate(- Math.PI / 2 + 2 * Math.PI / 60 * sec);
    ctx.beginPath();
    ctx.moveTo(-10, 0);
    ctx.lineTo(80, 0);
    ctx.strokeStyle = 'red';
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
    ctx.restore();
  }, 1000)
}
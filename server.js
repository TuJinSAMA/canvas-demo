import express from "express";

const app = express();

app.use(express.static("dist"));

const template = `
  <html>
    <head>
      <title>Canvas Demo</title>
    </head>
    <body>
      <canvas id="canvas" width="600" height="600">
        当前浏览器不支持canvas元素, 请升级或更换浏览器!
      </canvas>
      <script src="bundle.js"></script>
    </body>
  </html>
`;

app.get("*", (req, res) => {
  res.send(template);
})

app.listen(3002, () => console.log('server is running ...'))
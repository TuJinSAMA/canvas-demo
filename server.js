import express from "express";

const app = express();

app.use(express.static("dist"));

const template = `
  <html>
    <head>
      <title>Canvas Demo</title>
    </head>
    <body>
      <div id="root"></div>
      <script src="bundle.js"></script>
    </body>
  </html>
`;

app.get("*", (req, res) => {
  res.send(template);
})

app.listen(3002, () => console.log('server is running ...'))
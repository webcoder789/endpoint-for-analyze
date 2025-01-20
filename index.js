const express = require("express");
const { decycle } = require("json-cyclic");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/post", (request, response) => {
  //   const reqJson = JSON.stringify(decycle(req), null, 2);
  const reqJson = JSON.stringify(decycle(request));
  console.log(reqJson);
  console.log(
    "----------------------------------------------------------------"
  );

  response.send(reqJson);
});

app.post("/post-version", (request, response) => {
  response.send(request.httpVersion);
});

const port = parseInt(process.env.PORT ?? 3000);
// サーバーを起動
app.listen(port, () => {
  console.log(`Server running at`);
});

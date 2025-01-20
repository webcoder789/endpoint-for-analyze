const express = require("express");
const { decycle } = require("json-cyclic");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/post", (req, res) => {
  //   const reqJson = JSON.stringify(decycle(req), null, 2);
  const reqJson = JSON.stringify(decycle(req));
  console.log(reqJson);
  console.log(
    "----------------------------------------------------------------"
  );

  res.json({ message: "success" });
});

const port = 3000;
// サーバーを起動
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) =>
  res.json({
    data: "api 1",
  })
);

app.get("/test", (req, res) =>
  res.json({
    data: "test",
  })
);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

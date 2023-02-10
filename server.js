const express = require("express");
const app = express();

app.listen(8080, function () {
  console.log("linstening on 8080");
});

// 누군가가 /pet 으로 방문을 하면..
// pet관련된 안내문을 띄어주자

app.get("/src/", function (req, res) {
  res.sendfile(__dirname + "/index.html");
});

//누군가가 /beauty 로 방문을 하면..
// beauty 관련 안내문을 띄워준다.

app.get("/beauty", function (req, res) {
  res.send("뷰티용품 쇼핑할 수 있는 사이트입니다.");
});

app.get("/", function (req, res) {
  res.sendfILE(__dirname + "/index.html");
});

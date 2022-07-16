const http = require("http");
let users = [
  {
    id: 12,
    name: "zhufeng",
  },
  {
    id: 23,
    name: "zhufeng2",
  },
  {
    id: 3,
    name: "zhufeng3",
  },
  {
    id: 4,
    name: "zhufeng4",
  },
];
let server = http.createServer(function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.url == "/api/users") {
    res.end(JSON.stringify(users));
  }else{
    res.end('not found')
  }
});

server.listen(3000, (req, res) => {
  console.log("服务器启动在3000");
});

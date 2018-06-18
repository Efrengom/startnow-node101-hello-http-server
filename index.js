// write your code here

var http = require('http');

function onRequest(req, res) {

  console.log("Inside of onrequest")
  res.writeHead(200, {"Context-Type": "text/plain"});
  
  res.end('Hello World');
}

http.createServer(onRequest).listen(8080);

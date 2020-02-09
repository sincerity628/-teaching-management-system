let http = require('http');
// 创建一个HTTP web服务
http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
}).listen(8080);

console.log('the server is running on port 8080.');

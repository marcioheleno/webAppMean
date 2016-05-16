/**
 * Created by marcioheleno on 13/05/16.
 */
// criando o servidor HHTP Vanilla
var http = require("http");
http.createServer(function (request, respose) {
  respose.writeHead(200, {"Content-Type" : "text/plain"});
  respose.write("Hello Word");
  respose.end();
}).listen(3000);
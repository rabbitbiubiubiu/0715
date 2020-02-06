//创建服务器
var http=require("http");
http.createServer(function(request,response){
    response.writeHeader(200,{'Content-Type':'text/plain'});
    response.end("hello word!");
}).listen(8080)

console.log("Server running at http://127.0.0.1:8080");
/**
 * Created by Administrator on 2016/12/11.
 */
var http = require("http");

function onRequest(request, response) {
    console.log("Request received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}

http.createServer(onRequest).listen(8080);

console.log("Server has started.");

/*
    结果：当我们与往常一样，运行它node server.js时，
    它会马上在命令行上输出“Server has started.”。
    当我们向服务器发出请求（在浏览器访问http://localhost:8080/ ），
   “Request received.”这条消息就会在命令行中出现。
    这就是事件驱动的异步服务器端JavaScript和它的回调啦！
    当发生请求时，才会调用onReques函数
*/

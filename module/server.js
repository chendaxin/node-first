/**
 * Created by Administrator on 2016/12/11.
 */
var http = require("http");
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("路径名为" + pathname + "被触发");

        route(handle, pathname, response, request);

     /*   response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(coutent);
        response.end();*/
    }

    http.createServer(onRequest).listen(8888);
    console.log("服务器运行！");
}

exports.start = start;
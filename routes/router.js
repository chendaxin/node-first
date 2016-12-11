/**
 * Created by Administrator on 2016/12/11.
 */
function route(handle, pathname, response, request) {
    console.log("进入路由执行处理环境，路径名为： " + pathname);
    if(typeof  handle[pathname] === 'function') {
        return handle[pathname](response, request);
    } else {
        console.log("没有发现路径为: " + pathname + "的请求处理程序");
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
}
exports.route = route;
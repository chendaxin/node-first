/**
 * Created by Administrator on 2016/12/11.
 */
var server = require('./module/server');
var router = require("./routes/router");
var requestHandlers = require("./module/requestHandlers");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route, handle);
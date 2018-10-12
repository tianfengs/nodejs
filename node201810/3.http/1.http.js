// 引用系统模块http
var http=require('http');

/**
 *
 * @param request  请求
 * @param response 响应
 */
function serve(request,response) {
    console.log(request.method); // 请求的方法get，post
    console.log(request.url);           // 请求的地址
    console.log(request.headers);       // 请求头

    //响应
    response.setHeader('Content-Type','text/html;charset=utf-8'); // 设置响应类型，编码为utf-8
    response.statusCode=404;    // 状态码
    response.setHeader('name','tianfeng');// 设置响应头
    response.write(new Date().toString());
    response.end();

}
// 每当有请求来临的时候，都会调用serve对请求进行相应

// 建立一个http服务
var server = http.createServer(serve);

// 服务监听端口和地址
server.listen(8080,'localhost');
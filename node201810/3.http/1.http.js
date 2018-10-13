// 引用系统模块http
var http=require('http');
var fs=require('fs');
/**
 *
 * @param request  请求
 * @param response 响应
 */
function serve(request,response) {
    // console.log(request.method); // 请求的方法get，post
    // console.log(request.url);           // 请求的地址
    // //console.log(request.headers);       // 请求头

    var url=response.url;
    //响应
    // response.setHeader('Content-Type','text/html;charset=utf-8'); // 设置响应类型，编码为utf-8
    // response.statusCode=200;    // 状态码
    // response.setHeader('name','tianfeng');// 设置响应头

    if(url=='/') {
        response.setHeader('Content-Type','text/html;charset=utf-8');
        fs.readFile('index.html', function (err, data) {
            response.write(data); // 写响应体
            response.end();
        })
    }
    else if(url=='/style.css'){
        response.setHeader('Content-Type','text/css;charset=utf-8');
        fs.readFile('style.css', function (err, data) {
            response.write(data); // 写响应体
            response.end();
        })
    }
    else if(url=='/index.js'){
        response.setHeader('Content-Type','application/x-javascript;charset=utf-8');
        fs.readFile('index.js', function (err, data) {
            response.write(data); // 写响应体
            response.end();
        })
    }
    // response.write(new Date().toString()); // 写响应体
    // response.end();


}
// 每当有请求来临的时候，都会调用serve对请求进行相应

// 建立一个http服务
var server = http.createServer(serve);

// 服务监听端口和地址
server.listen(8080,'localhost');
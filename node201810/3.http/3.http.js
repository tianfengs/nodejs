// 引用系统模块http
let http=require('http');
let fs=require('fs');
let mime=require('mime'); // 根据文件的后缀，获取mime的类型名称，这是一个npm包，需要安装
                            // 打开Terminal，输入npm install mime 就可以了
let url=require('url');     // 对URL进行处理，把字符串转成对象。然后进行解析浏览器地址字符串对象，进行处理
                               // http://localhost:8080/?name=tianfeng&age=6

/**
 *
 * @param request  请求
 * @param response 响应
 */
function serve(request,response) {
    let urlObj = url.parse(request.url,true); // true 表示qurey转成对象
    console.log(request.url,urlObj.query.name,urlObj.query.age);
    let pathname = urlObj.pathname;
    if(pathname=='/'){
        //响应
        response.setHeader('Content-Type','text/html;charset=utf-8'); // 设置响应类型，编码为utf-8
        response.statusCode=200;    // 状态码
        response.setHeader('name','tianfeng');// 设置响应头

        fs.readFile('index.html',function (err,data) {
            response.write(data); // 写响应体
            response.end();
        })
    }
    else if(pathname=='/clock'){
        setInterval(function () {
            response.write(new Date().toString());
        },1000);
    }
    else{
        static(pathname,response);
    }

    function static(pathname,response) {
        //响应
        response.setHeader('Content-Type',mime.getType(pathname)+';charset=utf-8'); // 设置响应类型，编码为utf-8
        response.statusCode=200;    // 状态码
        response.setHeader('name','tianfeng');// 设置响应头

        fs.readFile(pathname.slice(1),function (err,data) {
            response.write(data); // 写响应体
            response.end();
        })
    }

    // else if(url=='/style.css'){
    //     //响应
    //     response.setHeader('Content-Type','text/css;charset=utf-8'); // 设置响应类型，编码为utf-8
    //     response.statusCode=200;    // 状态码
    //     response.setHeader('name','tianfeng');// 设置响应头
    //
    //     fs.readFile('style.css',function (err,data) {
    //         response.write(data); // 写响应体
    //         response.end();
    //     })
    // }
    // else if(url=='/index.js'){
    //     //响应
    //     response.setHeader('Content-Type','application/x-javascript;charset=utf-8'); // 设置响应类型，编码为utf-8
    //     response.statusCode=200;    // 状态码
    //     response.setHeader('name','tianfeng');// 设置响应头
    //
    //     fs.readFile('index.js',function (err,data) {
    //         response.write(data); // 写响应体
    //         response.end();
    //     })
    // }
    // response.write(new Date().toString()); // 写响应体
    // response.end();


}
// 每当有请求来临的时候，都会调用serve对请求进行相应

// 建立一个http服务
var server = http.createServer(serve);

// 服务监听端口和地址
server.listen(8080,'localhost');
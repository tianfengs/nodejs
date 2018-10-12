var fs = require('fs');
var express = require('express');

var http = require('http');
var crypto = require('crypto');
function getHash(str){
    var shasum = crypto.createHash('sha1');
    return shasum.update(str).digest('hex');
}
/**
 * 1.
 */
function send(filename,req,res){
    //取得最后修改时间
    var ifNoneMatch =req.headers['if-none-match'];
    var data=fs.readFileSync(filename).toString()
    if(ifNoneMatch == getHash(data)){
        res.statusCode = 304;
        res.end();
    }else{
        res.writeHead(200,{'Etag':getHash(data)});
        fs.createReadStream(filename).pipe(res);
    }
}
http.createServer(function(req,res){
    if(req.url != '/favicon.ico'){
        var filename = req.url.slice(1);// /index.html
        send(filename,req,res);
    }else{
        res.end('404');
    }
}).listen(8080);
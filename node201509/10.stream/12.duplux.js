var Duplex = require('stream').Duplex;
var fs = require('fs');
var util = require('util');
//实现一个文件加密的功能
util.inherits(SecretStream, Duplex);
function SecretStream(){
    Duplex.call(this,{highWaterMark:1});
}

SecretStream.prototype._read = function(){
this.push('x');
//this.push(null);
}

SecretStream.prototype._write = function(data,encoding,callback){
    /* for(var i=0;i<data.length;i++){
        data[i] = 255-data[i];
    }*/
    this.push(data);
    this.push(null);//表示完成
}

var secret = new SecretStream();
fs.createReadStream('./password.txt').pipe(secret).pipe(
    fs.createWriteStream('./password-secret.txt')
)


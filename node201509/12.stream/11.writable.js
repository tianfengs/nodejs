var Writable = require('stream').Writable;
var util = require('util');
var fs = require('fs');
function FsWritable(options){
    Writable.call(this,options);
    this._fd = fs.openSync(options.path,'a');
    this._highWaterMark = options.highWaterMark;
}
util.inherits(FsWritable,Writable);

FsWritable.prototype._write = function(data,encoding,callback){
  fs.writeSync(this._fd,data,0,data.length);
  callback();
}

var fsWritable = new FsWritable({path:'./write.txt'});
fsWritable.write(new Buffer('珠峰'),function(){
    fsWritable.write(new Buffer('培训'),function(){
        console.log('写入成功');
    });
});
/**
 * 事件
 * 订阅发布
 **/
function Person(name){
    this.name = name;
    this._events = {};
}
//注册监听
Person.prototype.on = function(eventName,callback){
    if(this._events[eventName]){//有人已经订阅过了这个事件
        this._events[eventName].push(callback);
    }else{
        this._events[eventName] = [callback];
    }
}

Person.prototype.emit = function(eventName){
    var args = Array.prototype.slice.call(arguments,1);
    var callbacks = this._events[eventName];
    var self = this;
    callbacks.forEach(function(callback){
        callback.apply(self,args);
    });
}
Person.prototype.removeListener = function(eventName,callback){
    this._events[eventName] = this._events[eventName].filter(function(cb){
      return cb != callback;
  });
}
Person.prototype.once = function(eventName,callback) {

  function onceCallback(){
     callback.apply(this,arguments);
     this.removeListener(eventName,onceCallback);
  }
  this.on(eventName,onceCallback);
}
var girl = new Person();
girl.on('长发及腰',function(){
    console.log('我要娶你可好');
});
girl.on('长发及腰',function(){
    console.log('记得撩');
});

girl.emit('长发及腰');

girl.once('18',function(style){
    console.log(style,'嫁张三');
});
girl.once('18',function(style){
    console.log(style,'嫁李四');
});
girl.emit('18','快乐');
girl.emit('18','不情愿的');
girl.emit('18','拒绝的');

















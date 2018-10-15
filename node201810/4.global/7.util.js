/**
 *  Util 工具模块
 */

function Parent(){
    this.name='father';
    this.age=6;
    this.say=function () {
        console.log('hello'.this.name);
    }
}
Parent.prototype.showName =function () { //prototype 属性使您有能力向对象添加属性和方法。
    console.log(this.name);
}

function Child() {
    this.name='Child';
}

// 继承方法：不能传参数，会继承私有属性
Child.prototype = new Parent();
var child=new Child();
child.showName();
console.log(child.name);
console.log(child.prototype === Object.prototype);


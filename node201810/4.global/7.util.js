/**
 *  Util 工具模块
 */

var util = require('util');

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
//Child.prototype = new Parent(); // Parent.prototype,方法一
//Child.prototype =Object.create(Parent.prototype); // 方法二
//Object.setPrototypeOf(Child.prototype,Parent.prototype); // 方法三
//方法四:推荐方法
util.inherits(Child,Parent);


var child=new Child();
child.showName();
console.log(child.name);
console.log(child.__proto__.__proto__.__proto__ === Object.prototype);
console.log(child.__proto__.__proto__ === Parent.prototype);

console.log();

//
function Person() {
    this.name='tianfeng';
    this.parent={
        name:'father+mother'
    }
}
Person.prototype.toString= function () {
    console.log('My name is ' , this.name);
    console.log('My parent is ', this.parent.name);
}

var p=new Person();
console.log(util.inspect(p));
/**
 * ShowHidden  是否显示隐藏属性
 * depth 对象递归显示的深度
 * colors 是否显示彩色
 */
console.log(util.inspect(p,true,0,true));
p.toString();

var arr1 = [1,2];
var arr2=[3,4];
// console.log(arr1.concat(arr2));
Array.prototype.push.apply(arr1,arr2);
console.log(arr1);
arr1.push(arr2);
console.log(arr1);

console.log(util.isArray(arr1));
console.log(util.isDate(arr1));
console.log(util.isRegExp(arr1));


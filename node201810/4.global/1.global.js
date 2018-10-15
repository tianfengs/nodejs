// 所有未捕获的异常，都会处理
// console.log(b);
// process.on('uncaughtException',function (e) {
//     console.log('uncaughtException' , e.message);
// });
/**
 *  global == window 全局对象
 *  console, trace
 *  process 代表当前的进程对象：输入输出，当前进程的ID等等，介入用户输入输出
 */

// this 指的是外部传入的内容
// var name = 'tianfeng';
// exports.name = name;
// console.log(this);

// function x(){
    var name = 'tianfeng';
    exports.name =name;
    console.log(this);

    //console.trace(); // 显示当前调用的当前的堆栈
// }

/**
 * process 代表当前的进程对象：输入输出，当前进程的ID等等
 * stdin 标准输入
 * stdout = console.log
 * on 就是监听
 */
console.log(process.pid);

process.stdin.on('data',function (data) {
    console.log(data);
    console.log(data.toString());
})

// 退出前执行一个回调函数
process.on('exit',function () {
    console.log('1.global.js的process退出');
})

try{
    console.log(a);
}
catch (e) {
    console.log(e.message);
}







// console.log(x);

// console.log(global);

/**
 *  console
 */
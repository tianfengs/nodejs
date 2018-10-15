/**
 * 优先级：
 *  process.nextStick
 *  setTimeout
 *  setImmediate
 *  IO异步
 */

var fs=require('fs');
// io异步，放到下一个队列执行
fs.readFile('1.txt',function (err,data) {
    console.log(data.toString());
})

// process.nextTick(function () {
//     console.log('a');
//     process.nextTick(function () {
//         console.log('b');
//     })
// })
setImmediate(function () {
    console.log('a');
    setImmediate(function () {
        console.log('b');
    })
})

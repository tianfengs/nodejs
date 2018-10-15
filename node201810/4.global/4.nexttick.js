/**
 *  nexttick 轮询，排到当前队列的底部
 *  settimeout，排到下一个队列的顶部
 *  事件环，或事件队列，优先级
 */

console.log('a客人，点菜');

setTimeout(function () {
    console.log('a客人，扫地,settimeout');
},0);

process.nextTick(function () {
    console.log('a客人，扫地,nextTick1');
    process.nextTick(function () {
        console.log('a客人，扫地,nextTick2');
        process.nextTick(function () {
            console.log('a客人，扫地,nextTick3');
        })
    })
})

console.log('b厨师，端菜');
console.log('c厨师，端菜');

process.argv.forEach(function (val,index,array) {
    console.log(val,index,array);

})

// 杀死1.global.js里的进程
process.kill(1628);
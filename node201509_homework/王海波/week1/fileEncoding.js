/**
 * �˴��ǽ� test.txt file����ת��Ϊ utf8
 * */

var fs = require('fs');
var content = fs.readFileSync('./test.txt', 'utf8');
console.log(content.toString());
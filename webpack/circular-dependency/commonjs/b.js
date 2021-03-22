console.log('b starting');
const flag = { done: false };
exports.bb = flag;
const a = require('./a.js');
console.log('in b, a.aa.done = %s', a.aa.done);
flag.done = true;
console.log('b done');

console.log('a starting');
const flag = { done: false };
exports.aa = flag;
const b = require('./b.js');
console.log('in a, b.bb.done = %s', b.bb.done);
flag.done = true;
console.log('a done');

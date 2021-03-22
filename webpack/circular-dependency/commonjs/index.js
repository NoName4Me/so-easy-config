console.log('main starting');
const a = require('./a.js');
const b = require('./b.js');
console.log('in main, a.aa.done = %s, b.bb.done = %s', a.aa.done, b.bb.done);
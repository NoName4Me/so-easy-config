console.log('a starting');
export let letA = { done: false };
export var varA = { done: false };
let defaultA = { done: false }

import defaultB, { letB, varB, bar } from './b.js';
export function foo() {
  console.log('a.foo called');
}
bar();
console.log('in a, b.varB.done = %s', varB.done);
console.log('in a, b.letB.done = %s', letB.done);
console.log('in a, defaultB.done = %s', defaultB.done);
letA.done = true;
varA.done = true;
console.log('a done');

export default defaultA;

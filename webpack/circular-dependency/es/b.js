console.log('b starting');
export let letB = { done: false };
export let varB = { done: false };
let defaultB = { done: false };

import defaultA, { letA, varA, foo } from './a.js';

export function bar() {
  console.log('b.bar called');
}

foo();
console.log('in a, a.varA.done = %s', varA.done);
console.log('in a, a.letA.done = %s', letA.done);
console.log('in a, defaultA.done = %s', defaultA.done);

letB.done = true;
varB.done = true;
console.log('b done');

export default defaultB;
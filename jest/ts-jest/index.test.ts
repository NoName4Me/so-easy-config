import { add } from './index';
import { minus } from './minus';

test('add should work', () => {
  expect(add(1, 2)).toBe(3);
});

test('minus should work', () => {
  expect(minus(1, 2)).toBe(-1);
});

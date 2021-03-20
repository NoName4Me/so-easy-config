const {add} = require('./index');

test('add should work', () => {
  expect(add(1,2)).toBe(3);
})

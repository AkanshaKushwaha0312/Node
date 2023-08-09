
const assert = require('assert');
const multiply = require('./Mult_Function'); // Update the path accordingly
describe('multiply function', () => {
  it('should return the product of two numbers', () => {
    assert.strictEqual(multiply(2, 3), 6);
    assert.strictEqual(multiply(-1, 1), -1);
    assert.strictEqual(multiply(0, 5), 0);
  });
});

const respository = require('../../../src/repository');
const { assert } = require('chai');

describe('Repository unit tests', () => {
  it('[findAll] - Get list products', () => {
    const expectedResult = [
      {
        name: 'sabonete', value: 5, quantity: 10
      },
      {
        name: 'chinelo', value: 15, quantity: 50
      },
      {
        name: 'bone', value: 30, quantity: 2
      }
    ];
    const result = respository.findAll();
    assert.deepEqual(result, expectedResult);
  });
});
const { findOrderedByName } = require("../../../src/service");
const { assert } = require("chai");

describe("Service unit tests", () => {
  it("[findOrderedByName] - Get ordered products", () => {
    const expectedResult = [
      {
        name: "bone",
        value: 30,
        quantity: 2,
      },
      {
        name: "chinelo",
        value: 15,
        quantity: 50,
      },
      {
        name: "sabonete",
        value: 5,
        quantity: 10,
      },
      {
        name: "cueca",
        value: 5,
        quantity: 0,
      },
    ];
    const result = findOrderedByName();
    assert.deepEqual(result, expectedResult);
  });
});

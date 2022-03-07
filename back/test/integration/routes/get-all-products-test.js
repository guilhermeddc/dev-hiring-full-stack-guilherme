const request = require('supertest');
const { assert } = require('chai')
const Server = require('../../../src/server');

const instanceServer = new Server();

describe('Products integration tests', () => {
  let app;
  before(() => {
    instanceServer.defineConfig();
    ({ app } = instanceServer);
  });
  after(() => instanceServer.stop());

  it('GET all products ordered', async () => {
    const expectedBody = [
      {
        "name": "bone",
        "value": 30,
        "quantity": 2
      },
      {
        "name": "chinelo",
        "value": 15,
        "quantity": 50
      },
      {
        "name": "sabonete",
        "value": 5,
        "quantity": 10
      }
    ];

    const { body } = await request(app)
    .get('/products/all')
      .expect(200);
    assert.deepEqual(body, expectedBody)
  });
});
const {
  getByName,
  getOrderedByName,
  remove,
  create,
  edit
} = require('../controller');

const routes = (router) => {
  router
    .get('/all', getOrderedByName)
    .get('/:name', getByName)
    .delete('/:name', remove)
    .post('/', create)
    .put('/:name', edit)
};

module.exports = routes;

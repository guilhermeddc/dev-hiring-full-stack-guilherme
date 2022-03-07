const { getByName, getOrderedByName } = require('./find');
const edit = require('./edit');
const create = require('./create');
const remove = require('./remove');

module.exports = {
  getOrderedByName,
  getByName,
  edit,
  create,
  remove
};

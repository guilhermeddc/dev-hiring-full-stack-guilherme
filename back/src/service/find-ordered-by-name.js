const repository = require('../repository');

const findOrderedByName = () => JSON.parse(JSON.stringify(repository.findAll()))
  .sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

module.exports = {
  findOrderedByName
};

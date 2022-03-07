const repository = require('../repository');

const findByName = (name) => {
  const nameNormalized = name.trim();
  const data = repository.findByName(nameNormalized);
  return data;
};

module.exports = {
  findByName
};

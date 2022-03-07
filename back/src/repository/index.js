const productsDB = [
  {
    name: 'sabonete',
    value: 5,
    quantity: 10
  },
  {
    name: 'chinelo',
    value: 15,
    quantity: 50
  },
  {
    name: 'bone',
    value: 30,
    quantity: 2
  }
];

const findAll = () => productsDB;

const findByName = (name) => productsDB.find((item) => item.name.trim() === name);

module.exports = {
  findAll,
  findByName
};
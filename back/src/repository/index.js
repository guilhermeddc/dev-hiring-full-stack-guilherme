const productsDB = [
  {
    name: "sabonete",
    value: 5,
    quantity: 10,
  },
  {
    name: "chinelo",
    value: 15,
    quantity: 50,
  },
  {
    name: "bone",
    value: 30,
    quantity: 2,
  },
  {
    name: "cueca",
    value: 30,
    quantity: 0,
  },
];

const findAll = () => productsDB;

const findByName = (name) =>
  productsDB.find((item) => item.name.trim() === name);

const addItem = ({ name, value, quantity }) =>
  productsDB.push({ name, value, quantity });

const editItem = ({ name, value, quantity }) =>
  productsDB.map((item) =>
    item.name === name ? { name, value, quantity } : item
  );

const deleteItem = ({ name }) => items.filter((item) => item.name !== name);

module.exports = {
  findAll,
  findByName,
  addItem,
  deleteItem,
  editItem,
};

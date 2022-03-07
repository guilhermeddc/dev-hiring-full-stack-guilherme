const { findOrderedByName, findByName } = require('../service')

const getOrderedByName = (req, res) => {
  try {
    const products = findOrderedByName();
    res.json(products);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const getByName = (req, res) => {
  const { name } = req.params;
  try {
    const product = findByName(name);
    setTimeout(() => {
      res.json(product);
    }, 10000)
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports = {
  getOrderedByName,
  getByName
};

const { addItem, findByName } = require("../repository");

const create = (req, res) => {
  const { name, value, quantity } = req;
  try {
    const productExists = findByName(name);

    if (!!productExists) {
      return res.status(400).json({ message: "Product already exists!" });
    }

    addItem({ name, value, quantity });

    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports = create;

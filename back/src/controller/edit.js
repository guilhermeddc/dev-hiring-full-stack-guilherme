const { editItem, findByName } = require("../repository");

const edit = (req, res) => {
  const { name } = req.params;
  const { value, quantity } = req.body;

  try {
    const productExists = findByName(name);

    if (!!productExists) {
      return res.status(400).json({ message: "Product already exists!" });
    }

    const product = {
      name,
      value: value ? value : productExists.value,
      quantity: quantity ? quantity : productExists.quantity,
    };

    editItem(product);

    res.json(product);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports = edit;

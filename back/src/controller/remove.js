const { deleteItem, findByName } = require("../repository");

const remove = (req, res) => {
  const { name } = req.params;
  try {
    const productExists = findByName(name);

    if (!productExists) {
      return new Error("Product does not exists!");
    }

    deleteItem({ name });

    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports = remove;

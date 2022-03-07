const edit = (req, res) => {
  const { name } = req.params;
  try {
    const product = { name };
    res.json(product);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports = edit;
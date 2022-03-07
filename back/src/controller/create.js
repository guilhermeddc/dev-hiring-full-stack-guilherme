const create = (req, res) => {
  const { body } = req;
  try {
    const product = { body };
    res.sendStatus(210);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports = create;

const remove = (req, res) => {
  const { name } = req.params;
  try {
    const product = { name };
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports = remove;

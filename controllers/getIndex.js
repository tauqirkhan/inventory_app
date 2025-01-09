const db = require("../db/queries");

const getIndex = async (req, res) => {
  const authorsArray = await db.getAllAuthorsNameArray();
  res.render("index", { authorsArray: authorsArray });
};

module.exports = getIndex;

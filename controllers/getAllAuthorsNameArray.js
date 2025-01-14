const db = require("../db/queries");

const getAllAuthorsNameArray = async (req, res) => {
  try {
    const authorsArray = await db.getAllAuthorsNameArray();
    res.json(authorsArray);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch authors" });
  }
};

module.exports = getAllAuthorsNameArray;

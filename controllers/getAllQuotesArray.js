const db = require("../db/queries");

const getAllQuotesArray = async (req, res) => {
  const { author_id } = req.query;

  if (author_id) {
    try {
      const quotesArrayById = await db.getAllQuotesArrayByAuthorId(author_id);
      res.json(quotesArrayById);
    } catch (err) {
      res
        .status(500)
        .json({ error: `Failed to fetch quotes of author_id: ${author_id}` });
    }
    return;
  }

  try {
    const quotesArray = await db.getAllQuotesArray();
    res.json(quotesArray);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch quotes" });
  }
};

module.exports = getAllQuotesArray;

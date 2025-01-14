const getFirstNonDeletedId = require("./utils/getFirstNonDeletedId");

const getIndex = async (req, res) => {
  const firstNonDeletedAuthorId = await getFirstNonDeletedId();
  res.redirect(`/${firstNonDeletedAuthorId}/quotes`);
};

module.exports = getIndex;

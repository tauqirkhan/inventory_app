const getFirstNonDeletedId = require("./utils/getFirstNonDeletedId");

const getIndex = async (req, res) => {
  const firstNonDeletedAuthorId = await getFirstNonDeletedId();
  console.log(firstNonDeletedAuthorId);
  res.redirect(`/${firstNonDeletedAuthorId}/quotes`);
};

module.exports = getIndex;

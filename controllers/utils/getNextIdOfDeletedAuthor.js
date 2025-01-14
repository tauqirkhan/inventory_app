const db = require("../../db/queries");
const getFirstNonDeletedId = require("./getFirstNonDeletedId");

async function getNextIdOfDeletedAuthor(deletedAuthorId = 50) {
  let startIndex = deletedAuthorId;
  let endIndex = deletedAuthorId + 50;
  for (let i = startIndex; i < endIndex; i++) {
    const name = await db.getAuthorNameById(i);

    //name either output [] or string and both have length property
    if (name.length > 0) {
      return i;
    }
  }

  const firstNonDeletedId = await getFirstNonDeletedId();

  return firstNonDeletedId;
}

module.exports = getNextIdOfDeletedAuthor;

const db = require("../../db/queries");

async function getFirstNonDeletedId(id = 0) {
  for (let i = id; i < id + 199; i++) {
    const name = await db.getAuthorNameById(i);
    //name either output [] or string and both have length property
    if (name.length > 0) {
      return i;
    }
  }
  return new Error("Nothing to see");
}

module.exports = getFirstNonDeletedId;

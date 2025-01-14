const db = require("../../db/queries");

async function getFirstNonDeletedId() {
  for (let i = 0; i < 1000; i++) {
    const rows = await db.getAuthorNameById(i);
    if (rows.length > 0) {
      return i;
    }
  }
  return new Error("Nothing to see");
}

module.exports = getFirstNonDeletedId;

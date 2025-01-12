const db = require("../../db/queries");

async function getFirstNonDeletedId() {
  for (let i = 0; i < 1000; i++) {
    console.log("loop", i);
    const rows = await db.getAuthorNameById(i);
    if (rows.length > 0) {
      console.log("id", rows[0].id);
      return i;
    }
  }
  return new Error("Nothing to see");
}

module.exports = getFirstNonDeletedId;

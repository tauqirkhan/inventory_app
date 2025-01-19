function checkQueryAndAddError(error_type, resObj) {
  if (error_type !== undefined) {
    if (error_type == "quoteError") {
      resObj.locals.errors = [
        { msg: "Incorrect admin password to edit quote" },
      ];
    }
    if (error_type == "authorError") {
      resObj.locals.errors = [
        { msg: "Incorrect admin password to edit Author Name" },
      ];
    }
  }
}

module.exports = checkQueryAndAddError;

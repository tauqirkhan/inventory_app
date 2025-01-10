const addAuthorBtn = document.querySelector(".addAuthorBtn");
const dialogAuthor = document.querySelector("#dialogAuthor");
const addQuoteBtn = document.querySelector(".addQuoteBtn");
const dialogQuote = document.querySelector("#dialogQuote");

addAuthorBtn.addEventListener("click", openAuthorModal);
dialogAuthor.addEventListener("click", closeAuthorModal);
addQuoteBtn.addEventListener("click", openQuoteModal);
dialogQuote.addEventListener("click", closeQuoteModal);

function openAuthorModal() {
  dialogAuthor.showModal();
}

function openQuoteModal() {
  dialogQuote.showModal();
}

function closeAuthorModal(e) {
  const dialogDimensions = dialogAuthor.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    dialogAuthor.close();
  }
}

function closeQuoteModal(e) {
  const dialogDimensions = dialogQuote.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    dialogQuote.close();
  }
}

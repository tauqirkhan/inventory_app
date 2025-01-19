import fetchAuthorsArr from "./utils/fetchAuthorsArr.js";
import fetchQuotesArrByAuthorId from "./utils/fetchQuotesArrByAuthorId.js";

const addAuthorBtn = document.querySelector(".addAuthorBtn");
const dialogAuthor = document.querySelector("#dialogAuthor");
const addQuoteBtn = document.querySelector(".addQuoteBtn");
const dialogQuote = document.querySelector("#dialogQuote");
const path = window.location.pathname;
const parts = path.split("/"); // outputs ["", "author_id", quotes]
const author_id = parts[1];

addAuthorBtn.addEventListener("click", () => openModal(dialogAuthor));
dialogAuthor.addEventListener("click", (e) => closeModal(e, dialogAuthor));
addQuoteBtn.addEventListener("click", () => openModal(dialogQuote));
dialogQuote.addEventListener("click", (e) => closeModal(e, dialogQuote));

addEventListenerToEachAuthorId();
addEventListenerToEachQuoteByAuthorId(author_id);

async function addEventListenerToEachAuthorId() {
  const authorsArray = await fetchAuthorsArr();

  authorsArray.forEach((author) => {
    const updateAuthorNameBtnId = document.querySelector(
      `#updateAuthorNameBtn${author.id}`
    );
    const dialogAuthorId = document.querySelector(
      `#dialogUpdateAuthor${author.id}`
    );

    updateAuthorNameBtnId.addEventListener("click", () =>
      openModal(dialogAuthorId)
    );
    dialogAuthorId.addEventListener("click", (e) =>
      closeModal(e, dialogAuthorId)
    );
  });
}

async function addEventListenerToEachQuoteByAuthorId(author_id) {
  const quotesArray = await fetchQuotesArrByAuthorId(author_id);

  quotesArray.forEach((quote) => {
    const dialogUpdateQuoteId = document.querySelector(
      `#dialogUpdateQuote${quote.id}`
    );
    const updateQuoteBtnId = document.querySelector(
      `#updateQuoteBtn${quote.id}`
    );

    const dialogDeleteQuoteId = document.querySelector(
      `#dialogDeleteQuote${quote.id}`
    );

    const deleteQuoteBtnId = document.querySelector(
      `#deleteQuoteBtn${quote.id}`
    );

    updateQuoteBtnId.addEventListener("click", () =>
      openModal(dialogUpdateQuoteId)
    );

    dialogUpdateQuoteId.addEventListener("click", (e) =>
      closeModal(e, dialogUpdateQuoteId)
    );

    deleteQuoteBtnId.addEventListener("click", () =>
      openModal(dialogDeleteQuoteId)
    );

    dialogDeleteQuoteId.addEventListener("click", (e) =>
      closeModal(e, dialogDeleteQuoteId)
    );
  });
}

function openModal(dialog) {
  dialog.showModal();
}

function closeModal(e, dialog) {
  const dialogDimensions = dialog.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    dialog.close();
  }
}

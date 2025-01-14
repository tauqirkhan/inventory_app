import fetchAuthorsArr from "./utils/fetchAuthorsArr.js";

const addAuthorBtn = document.querySelector(".addAuthorBtn");
const dialogAuthor = document.querySelector("#dialogAuthor");
const addQuoteBtn = document.querySelector(".addQuoteBtn");
const dialogQuote = document.querySelector("#dialogQuote");

addAuthorBtn.addEventListener("click", () => openModal(dialogAuthor));
dialogAuthor.addEventListener("click", (e) => closeModal(e, dialogAuthor));
addQuoteBtn.addEventListener("click", () => openModal(dialogQuote));
dialogQuote.addEventListener("click", (e) => closeModal(e, dialogQuote));

addEventListenerToEachAuthorId();

async function addEventListenerToEachAuthorId() {
  const authorsArray = await fetchAuthorsArr();

  authorsArray.forEach((author) => {
    const updateAuthorNameBtnId = document.querySelector(
      `#updateAuthorNameBtn${author.id}`
    );
    const dialogAuthorById = document.querySelector(
      `#dialogUpdateAuthor${author.id}`
    );

    updateAuthorNameBtnId.addEventListener("click", () =>
      openModal(dialogAuthorById)
    );
    dialogAuthorById.addEventListener("click", (e) =>
      closeModal(e, dialogAuthorById)
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

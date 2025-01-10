const addAuthorBtn = document.querySelector(".addAuthorBtn");
const dialog = document.querySelector("#dialog");

addAuthorBtn.addEventListener("click", openModal);
dialog.addEventListener("click", closeModal);

function openModal() {
  dialog.showModal();
}

function closeModal(e) {
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

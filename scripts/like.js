// Классы для работы скрипта:
// like-icon, card__like-button, card__icon-button, is-liked, button-text

const likeHeartArray = document.querySelectorAll(".like-icon");
const likeButtonArray = document.querySelectorAll(".card__like-button");
const iconButtonArray = document.querySelectorAll(".card__icon-button");

iconButtonArray.forEach((iconButton, index) => {
  iconButton.onclick = () =>
    toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
});

likeButtonArray.forEach((button, index) => {
  button.onclick = () => toggleIsLiked(likeHeartArray[index], button);
});

function toggleIsLiked(heart, button) {
  heart.classList.toggle("is-liked");
  setButtonText(heart, button);
}

function setButtonText(heart, button) {
  if ([...heart.classList].includes("is-liked")) {
    setTimeout(
      () => (button.querySelector(".button-text").textContent = "Unlike"),
      500
    );
  } else {
    setTimeout(
      () => (button.querySelector(".button-text").textContent = "Like"),
      500
    );
  }
}

// Модальное окно
const saveButton = document.querySelector(".save-button");
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modal-close");

saveButton.onclick = () => modal.showModal();

modalClose.onclick = () => modal.close();

modal.onclick = (event) => {
  if (event.target === modal) {
    modal.close();
  }
};

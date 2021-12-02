const popup = document.querySelector(".popup");
const popupForm = document.querySelector(".popup__form");
const popupOpenButton = document.querySelector(".profile__edit-button");
const popupCloseButton = document.querySelector(".popup__close-button");
const popupSaveButton = document.querySelector(".popup__save-button");
const popupName = document.querySelector(".popup__input_type_name");
const popupActivity = document.querySelector(".popup__input_type_activity");
const profileName = document.querySelector(".profile__name");
const profileActivity = document.querySelector(".profile__activity");

function popupOpen() {
  popup.classList.add("popup_active");
  popupName.value = profileName.textContent;
  popupActivity.value = profileActivity.textContent;
}

function popupClose() {
  popup.classList.remove("popup_active");
}
function popupSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileActivity.textContent = popupActivity.value;
  popupClose();
}
popupCloseButton.addEventListener("click", popupClose);
popupOpenButton.addEventListener("click", popupOpen);
popupForm.addEventListener("submit", popupSubmit);

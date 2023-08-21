const popupEditButtonElement = document.querySelector('.profile__info_edit-button');
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = document.querySelector('.popup__close-button');
const formElement = popupElement.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input-name');
const jobInput = formElement.querySelector('.popup__input-info');
const profileInfo = document.querySelector('.profile__info_subtitle');
const profileName = document.querySelector('.profile__info_title');

function openPopup() {
  popupElement.classList.add('popup_opened');
}

function closePopup() {
  popupElement.classList.remove('popup_opened');
}

popupEditButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileInfo.textContent = jobInput.value;
  closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);

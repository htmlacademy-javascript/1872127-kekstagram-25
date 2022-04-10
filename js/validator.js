import {sendData} from './api.js';
import {closePhotoModal} from './processing-modal.js';
import {isEscapeKey} from './util.js';

const form = document.querySelector('.img-upload__form');
const submitButton = document.querySelector('.img-upload__submit');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorClass: 'img-upload__text--invalid',
  successClass: 'img-upload__text--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__error'
});

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Отправляю';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Отправить';
};

const MAX_TAGS = 5;

const ruleHashtag = /^#[A-Za-zA-Яа-яЁё0-9]{1,19}$/;

const validateTagsQuantity = (value) =>
  value.trim().toLowerCase().split(/\s+/).length <= MAX_TAGS;

const validateHashtag = (value) => {
  const tags = value.trim().toLowerCase().split(/\s+/);
  for (const tag of tags) {
    if (!ruleHashtag.test(tag)) {
      return false;
    }
  }
  return true;
};

const initUploadWindow = () => {
  pristine.addValidator(
    form.querySelector('.text__hashtags'),
    validateTagsQuantity,
    'Не более пяти хэш-тегов'
  );

  pristine.addValidator(
    form.querySelector('.text__hashtags'),
    validateHashtag,
    'Используйте только буквы и цифры'
  );

  const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
  const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');

  const onEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closePhotoModal();
      document.removeEventListener('keydown', onEscKeydown);
    }
  };

  const onSucceed = () => {
    const message = successMessageTemplate.cloneNode(true);
    message.querySelector('.success__button').addEventListener('click', () => {
      message.remove();
      closePhotoModal();
    });
    document.addEventListener('keydown', onEscKeydown);
    document.body.appendChild(message);
  };

  const onFailed = () => {
    const message = errorMessageTemplate.cloneNode(true);
    message.querySelector('.error__button').addEventListener('click', () => {
      message.remove();
      closePhotoModal();
    });
    document.addEventListener('keydown', onEscKeydown);
    document.body.appendChild(message);
  };

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          closePhotoModal();
          unblockSubmitButton();
          onSucceed();
        },
        () => {
          closePhotoModal();
          unblockSubmitButton();
          onFailed();
        },
        new FormData(evt.target),
      );
    }
  });
};

export {initUploadWindow, unblockSubmitButton};

import {sendData} from './api.js';
import {closePhotoModalHandler} from './processing-modal.js';
import {isEscapeKey} from './util.js';

const MAX_TAGS = 5;

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
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

const blockSubmitButtonHandler = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Отправляю';
};

const unblockSubmitButtonHandler = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Отправить';
};

const ruleHashtag = /^#[A-Za-zA-Яа-яЁё0-9]{1,19}$/;

const onValidateTagsQuantity = (value) =>
  value.trim().toLowerCase().split(/\s+/).length <= MAX_TAGS;

const onValidateHashtag = (value) => {
  value = value.trim().toLowerCase();
  if (value) {
    const tags = value.split(/\s+/);
    for (const tag of tags) {
      if (!ruleHashtag.test(tag)) {
        return false;
      }
    }

    if ((new Set(tags)).size !== tags.length) {
      return false;
    }
  }
  return true;
};


const onEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePhotoModalHandler();
    document.removeEventListener('keydown', onEscKeydown);
  }
};

const onSucceed = () => {
  const message = successMessageTemplate.cloneNode(true);
  message.querySelector('.success__button').addEventListener('click', () => {
    message.remove();
    closePhotoModalHandler();
  });
  document.addEventListener('keydown', onEscKeydown);
  document.body.appendChild(message);
};

const onFailed = () => {
  const message = errorMessageTemplate.cloneNode(true);
  message.querySelector('.error__button').addEventListener('click', () => {
    message.remove();
    closePhotoModalHandler();
  });
  document.addEventListener('keydown', onEscKeydown);
  document.body.appendChild(message);
};

const initUploadWindowHandler = () => {
  pristine.addValidator(
    form.querySelector('.text__hashtags'),
    onValidateTagsQuantity,
    'Не более пяти хэш-тегов'
  );

  pristine.addValidator(
    form.querySelector('.text__hashtags'),
    onValidateHashtag,
    'Используйте только буквы и цифры со знаком #, а также избегайте одинаковых хэш-тегов :)'
  );

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButtonHandler();
      sendData(
        () => {
          closePhotoModalHandler();
          unblockSubmitButtonHandler();
          onSucceed();
          form.reset();
        },
        () => {
          closePhotoModalHandler();
          unblockSubmitButtonHandler();
          onFailed();
          form.reset();
        },
        new FormData(evt.target),
      );
    }
  });
};

export {initUploadWindowHandler, onFailed};

const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorClass: 'img-upload__text--invalid',
  successClass: 'img-upload__text--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__error'
});

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

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    pristine.validate();
  });
};

export {initUploadWindow};

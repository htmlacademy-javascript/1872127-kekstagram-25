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

function validateHashtag (value) {
  return value.trim().toLowerCase().split(/\s+/).length <= MAX_TAGS;
}

const initUploadWindow = () => {
  pristine.addValidator(
    form.querySelector('.text__hashtags'),
    validateHashtag(),
    'Не более пяти хэш-тегов'
  );

  const ruleHashtag = /^#[A-Za-zA-Яа-яЁё0-9]{1,19}$/;

  pristine.addValidator(
    form.querySelector('.text__hashtags'),
    (value) => {
      const tags = value.trim().toLowerCase().split(/\s+/);
      if (!ruleHashtag.test(tags)) {
        return 'Используйте только буквы и цифры';
      }
      return true;
    }
  );

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();
  }
  );
};

export {initUploadWindow};

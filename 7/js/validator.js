const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorClass: 'img-upload__text--invalid',
  successClass: 'img-upload__text--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'img-upload__error'
});

function validateHashtag (value) {
  return value.length >=2 && value.length <= 20;
}

pristine.addValidator(
  form.querySelector('.text__hashtags'),
  validateHashtag,
  'От 2 до 20 символов, включая #'
);

const ruleHashtag = /^#[A-Za-zA-Яа-яЁё0-9]{1,19}$/;

pristine.addValidator(
  form.querySelector('.text__hashtags'),
  ruleHashtag,
  'Хэш-тег должн состоять только из букв и чисел'
);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
// добавить условия
//  - нечувствительный регистр
// - разделение пробелами /s?
// - нельзя использовать одинаковые хештеги (цикл?)
// - не более 5 хештегов
// - если фокус находится в поле ввода хэш-тега,
// нажатие на Esc не должно приводить к закрытию формы
// редактирования изображения. (tabindex? evt.preventDefault()?)

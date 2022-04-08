import {renderPhotos} from './render.js';
import {renderModalPhotos, closePhotoModal} from './processing-modal.js';
import {initUploadWindow} from './validator.js';
import './slider-photo.js';
import './scale-photo.js';
import {getData, sendData} from './api.js';
import {isEscapeKey} from './util.js';
renderModalPhotos();
initUploadWindow();

const PHOTOS_COUNT = 25;

const onEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePhotoModal();
  }
};

const onSucceed = () => {
  const message = document.querySelector('#success').content.cloneNode(true);
  document.body.appendChild(message);
  document.querySelector('.success__button').addEventListener('click', () => {
    document.body.remove(message);
    closePhotoModal();
  });
  document.querySelector('.success__button').addEventListener('keydown', onEscKeydown);
};

const onFailed = () => {
  const message = document.querySelector('#error').content.cloneNode(true);
  document.body.appendChild(message);
  document.querySelector('.error__button').addEventListener('click', () => {
    document.body.remove(message);
    closePhotoModal();
  });
  document.querySelector('.error__button').addEventListener('keydown', onEscKeydown);
};

getData((photos) => {
  renderPhotos(photos.slice(0, PHOTOS_COUNT));
},
() => {},
);

// sendData(onSucceed(), onFailed(), () => {},);

// я понимаю, что на обработчике getData в случае успеха мы отрисовываем фотки
// в случае неудачи написано придумать дизайн блока самому. это как?
// ни одного шаблона под это дело не нашел (п. 4.2)

// при этом в случае отправки успешной вылезает окошко, мы нажимаем и оно закрывается
// в случае ошибки так же сообщение

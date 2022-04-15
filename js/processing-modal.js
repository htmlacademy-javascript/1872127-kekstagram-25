import {isEscapeKey, isEnterKey} from './util.js';
import {runDefaultScaleHandler} from './scale-photo.js';
const pageBody = document.querySelector('body');
const photoProcessing = document.querySelector('.img-upload__overlay');
const photoProcessingOpen = document.querySelector('#upload-file');
const photoProcessingClose = document.querySelector('#upload-cancel');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePhotoModalHandler();
  }
};

const openPhotoModalHandler = () => {
  photoProcessing.classList.remove('hidden');
  pageBody.classList.add('modal-open');

  // обработчик закрытия при нажатии ESC
  document.addEventListener('keydown', onPopupEscKeydown);
};

const closePhotoModalHandler = () => {
  photoProcessing.classList.add('hidden');
  pageBody.classList.remove('modal-open');

  document.removeEventListener('keydown', onPopupEscKeydown);
};

const onRenderModalPhotos = () => {
  // обработчик открытия:
  photoProcessingOpen.addEventListener('change', () => {
    openPhotoModalHandler();
    runDefaultScaleHandler();
  });

  // обработчик открытия при нажатии ENTER
  photoProcessingOpen.addEventListener('keydown', (evt) => {
    if (isEnterKey(evt)) {
      openPhotoModalHandler();
      runDefaultScaleHandler();
    }
  });

  // обработчик закрытия:
  photoProcessingClose.addEventListener('click', () => {
    closePhotoModalHandler();
  });
};

export {onRenderModalPhotos, onPopupEscKeydown, closePhotoModalHandler};

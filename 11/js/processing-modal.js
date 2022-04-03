import {isEscapeKey, isEnterKey} from './util.js';
import { runDefaultScale } from './scale-photo.js';
const pageBody = document.querySelector('body');
const photoProcessing = document.querySelector('.img-upload__overlay');
const photoProcessingOpen = document.querySelector('#upload-file');
const photoProcessingClose = document.querySelector('#upload-cancel');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePhotoModal();
  }
};

function openPhotoModal () {
  photoProcessing.classList.remove('hidden');
  pageBody.classList.add('modal-open');

  // обработчик закрытия при нажатии ESC
  document.addEventListener('keydown', onPopupEscKeydown);
}

function closePhotoModal () {
  photoProcessing.classList.add('hidden');
  pageBody.classList.remove('modal-open');

  document.removeEventListener('keydown', onPopupEscKeydown);
}

const renderModalPhotos = () => {
  // обработчик открытия:
  photoProcessingOpen.addEventListener('change', () => {
    openPhotoModal();
    runDefaultScale();
  });

  // обработчик открытия при нажатии ENTER
  photoProcessingOpen.addEventListener('keydown', (evt) => {
    if (isEnterKey(evt)) {
      openPhotoModal();
      runDefaultScale();
    }
  });

  // обработчик закрытия:
  photoProcessingClose.addEventListener('click', () => {
    closePhotoModal();
  });
};

export {renderModalPhotos, onPopupEscKeydown};

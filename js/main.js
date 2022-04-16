import {renderPhotosHandler, onSetDiscussedClick, onSetRandomClick, onSetDefaultClick} from './render.js';
import {onRenderModalPhotos} from './processing-modal.js';
import {initUploadWindowHandler, onFailed} from './validator.js';
import './slider-photo.js';
import './scale-photo.js';
import {getData} from './api.js';
import {initUploadImage} from './upload-image.js';

onRenderModalPhotos();
initUploadWindowHandler();
initUploadImage();

getData((photos) => {
  renderPhotosHandler(photos);
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
  onSetDefaultClick(photos);
  onSetDiscussedClick(photos);
  onSetRandomClick(photos);
},
onFailed,
);

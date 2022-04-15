import {renderPhotosHandler, onSetDiscussedClick, onSetRandomClick, onSetDefaultClick} from './render.js';
import {onRenderModalPhotos} from './processing-modal.js';
import {initUploadWindowHandler} from './validator.js';
import './slider-photo.js';
import './scale-photo.js';
import {getData} from './api.js';
onRenderModalPhotos();
initUploadWindowHandler();

getData((photos) => {
  renderPhotosHandler(photos);
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
  onSetDefaultClick(photos);
  onSetDiscussedClick(photos);
  onSetRandomClick(photos);
},
() => {},
);

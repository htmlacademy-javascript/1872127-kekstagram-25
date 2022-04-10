import {renderPhotos} from './render.js';
import {renderModalPhotos} from './processing-modal.js';
import {initUploadWindow} from './validator.js';
import './slider-photo.js';
import './scale-photo.js';
import {getData} from './api.js';
renderModalPhotos();
initUploadWindow();

getData((photos) => {
  renderPhotos(photos);
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
},
() => {},
);

import {renderPhotos} from './render.js';
import {renderModalPhotos} from './processing-modal.js';
import {initUploadWindow} from './validator.js';
import './slider-photo.js';
import './scale-photo.js';
import {getData} from './api.js';
renderModalPhotos();
initUploadWindow();

const PHOTOS_COUNT = 25;

getData((photos) => {
  renderPhotos(photos.slice(0, PHOTOS_COUNT));
},
() => {},
);

// import {createPhotos} from './data.js';
import {renderPhotos} from './render.js';
import {renderModalPhotos, closePhotoModal} from './processing-modal.js';
import {initUploadWindow} from './validator.js';
import './slider-photo.js';
import './scale-photo.js';
import {getData} from './api.js';
// const photos = createPhotos();
// renderPhotos(photos);
renderModalPhotos();
initUploadWindow(closePhotoModal());

const PHOTOS_COUNT = 25;

getData((photos) => {
  renderPhotos(photos.slice(0, PHOTOS_COUNT));
});

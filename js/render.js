import {openPhotoHandler} from './fullscreen-photo.js';
import {debounce} from './util.js';
const PHOTOS_COUNT = 25;

const photoTemplate = document.body.querySelector('#picture').content.querySelector('.picture');
const photoBox = document.body.querySelector('.pictures');

const onRenderPhoto = (photo) => {
  const photoElement = photoTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = photo.url;
  photoElement.querySelector('.picture__likes').textContent = photo.likes;
  photoElement.querySelector('.picture__comments').textContent = photo.comments.length;
  photoElement.addEventListener('click', () => {
    openPhotoHandler(photo);
    document.body.classList.add('modal-open');
  });
  return photoElement;
};

const clearPhotosHandler = () => {
  photoBox.querySelectorAll('.picture').forEach((element) => element.remove());
};

const renderPhotosHandler = (photos) => {
  clearPhotosHandler();
  const photoFragment = document.createDocumentFragment();
  photos
    .slice(0, PHOTOS_COUNT)
    .forEach((item) => {
      photoFragment.appendChild(onRenderPhoto(item));
    });
  photoBox.appendChild(photoFragment);
};

const comparePhotosHandler = function (photoA, photoB) {
  return photoB.comments.length - photoA.comments.length;
};

const onSetDefaultClick = (photos) => {
  document.querySelector('#filter-default').addEventListener('click', debounce((evt) => {
    document.querySelector('#filter-random').classList.remove('img-filters__button--active');
    document.querySelector('#filter-discussed').classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
    renderPhotosHandler(photos);
  }));
};

const onSetDiscussedClick = (photos) => {
  document.querySelector('#filter-discussed').addEventListener('click', debounce((evt) => {
    document.querySelector('#filter-default').classList.remove('img-filters__button--active');
    document.querySelector('#filter-random').classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
    const mostCommented = photos.slice().sort(comparePhotosHandler);
    renderPhotosHandler(mostCommented);
  }));
};

const onSetRandomClick = (photos) => {
  document.querySelector('#filter-random').addEventListener('click', debounce((evt) => {
    document.querySelector('#filter-discussed').classList.remove('img-filters__button--active');
    document.querySelector('#filter-default').classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
    const showRandomly = photos.slice().sort(comparePhotosHandler).slice(15);
    renderPhotosHandler(showRandomly);
  }));
};

export {renderPhotosHandler, onSetDiscussedClick, onSetRandomClick, onSetDefaultClick};

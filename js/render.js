import {openFullscreenPhoto} from './fullscreen-photo.js';
const photoTemplate = document.body.querySelector('#picture').content.querySelector('.picture');
const photoBox = document.body.querySelector('.pictures');

const renderPhoto = (photo) => {
  const photoElement = photoTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = photo.url;
  photoElement.querySelector('.picture__likes').textContent = photo.likes;
  photoElement.querySelector('.picture__comments').textContent = photo.comments.length;
  photoElement.addEventListener('click', () => {
    openFullscreenPhoto(photo);
    document.body.classList.add('modal-open');
  });
  return photoElement;
};

const clearPhotos = () => {
  photoBox.querySelectorAll('.picture').forEach((element) => element.remove());
};

const PHOTOS_COUNT = 25;

const renderPhotos = (photos) => {
  clearPhotos();
  const photoFragment = document.createDocumentFragment();
  photos
    .slice(0, PHOTOS_COUNT)
    .sort(comparePhotos)
    .forEach((item) => {
      photoFragment.appendChild(renderPhoto(item));
    });
  photoBox.appendChild(photoFragment);
};

function comparePhotos (photoA, photoB) {
  return photoB.comments.length - photoA.comments.length;
}
// надо ли удалять clearPhotos() и вместо него писать photoBox.innerHTML =''? Какая цель? В чем разница?
const setDefaultClick = (photos) => {
  document.querySelector('#filter-discussed').addEventListener('click', (evt) => {
    document.querySelector('#filter-random').classList.remove('img-filters__button--active');
    document.querySelector('#filter-discussed').classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
    renderPhotos(photos);
  });
};

const setDiscussedClick = (photos) => {
  document.querySelector('#filter-discussed').addEventListener('click', (evt) => {
    document.querySelector('#filter-default').classList.remove('img-filters__button--active');
    document.querySelector('#filter-random').classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
    const mostCommented = photos.forEach(comparePhotos);
    renderPhotos(mostCommented);
  });
};

const setRandomClick = (photos) => {
  document.querySelector('#filter-random').addEventListener('click', (evt) => {
    document.querySelector('#filter-discussed').classList.remove('img-filters__button--active');
    document.querySelector('#filter-random').classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
    const showRandomly = photos.sort(comparePhotos).slice(10);
    renderPhotos(showRandomly);
  });
};

export {renderPhotos, clearPhotos, setDiscussedClick, setRandomClick, setDefaultClick};

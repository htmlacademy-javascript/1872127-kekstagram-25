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

const PHOTOS_COUNT = 25;

const getPhotosRank = (indication) => {
  const urlPhotoRecorded = document.querySelector('.picture__img').src; // адрес изображения
  const commentsPhotoRecorded = document.querySelector('.picture__comments').textContent; // количество комментариев

  let rank = 0;
// присвоение ранга исходя из количества комментариев
  if ((indication.textContent === commentsPhotoRecorded) <= 5) {
    rank += 1;
  }

  if ((indication.textContent === commentsPhotoRecorded) > 5 && (indication.textContent === commentsPhotoRecorded) <= 10) {
    rank += 2;
  }

  if ((indication.textContent === commentsPhotoRecorded) > 10 && (indication.textContent === commentsPhotoRecorded) <= 15) {
    rank += 3;
  }

  if ((indication.textContent === commentsPhotoRecorded) > 15) {
    rank += 4;
  }
// если изображения не похожи
  if (indication.url !== urlPhotoRecorded.value) { 
    rank += 5;
  }

  return rank;
};
// и потом при сортировке по популярности построим массив на убывание
// по случайным фотографиям укажем ранг не ниже 5

const comparePhotos = (photoA, photoB) => {
  const rankA = getPhotosRank(photoA);
  const rankB = getPhotosRank(photoB);

  return rankB - rankA;
};
// надо ли удалять clearPhotos() и вместо него писать photoBox.innerHTML =''? Какая цель? В чем разница?
const clearPhotos = () => {
  photoBox.querySelectorAll('.picture').forEach((element) => element.remove());
};

const setDiscussedClick = (cb) => {
  document.querySelector('#filter-discussed').addEventListener('click', (evt) => {

  });
};

const setRandomClick = (cb) => {
  document.querySelector('#filter-random').addEventListener('click', (evt) => {

  });
};

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

export {renderPhotos, clearPhotos, setDiscussedClick, setRandomClick};

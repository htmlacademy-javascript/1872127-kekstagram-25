import {fullscreenPhoto} from './fullscreen-photo';
const photoTemplate = document.body.querySelector('#picture').content;
const photoBox = document.body.querySelector('.pictures');

const renderPhoto = (photo) => {
  const photoElement = photoTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = photo.url;
  photoElement.querySelector('.picture__likes').textContent = photo.likes;
  photoElement.querySelector('.picture__comments').textContent = photo.comments.length;
  photoElement.addEventListener('click', () => {
    fullscreenPhoto();
    document.querySelector('.social__comment-count').classList.add('.hidden');
    document.querySelector('.comments-loader').classList.add('.hidden');
    document.body.classList.add('.modal-open');
  });//функция открытия модального окна фото(объект информации с фотографии
  return photoElement;
};

const clearPhotos = () => {
  photoBox.querySelectorAll('.picture').forEach((element) => element.remove());
};

const renderPhotos = (photos) => {
  clearPhotos();
  const photoFragment = document.createDocumentFragment();
  photos.forEach((item) => {
    photoFragment.appendChild(renderPhoto(item));
  });
  photoBox.appendChild(photoFragment);
};

export {renderPhotos, clearPhotos};

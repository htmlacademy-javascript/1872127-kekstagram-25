const photoTemplate = document.body.querySelector('#picture').content;
const photoBox = document.body.querySelector('.pictures');

const renderPhoto = (photo) => {
  const photoElement = photoTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = photo.url;
  photoElement.querySelector('.picture__likes').textContent = photo.likes;
  photoElement.querySelector('.picture__comments').textContent = photo.comments.length;
  return photoElement;
};

const photoFragment = document.createDocumentFragment();

const renderPhotos = (photos) => {
  photos.forEach((item) => {
    photoFragment.appendChild(renderPhoto(item));
  });
  photoBox.appendChild(photoFragment);
};

export {renderPhotos};

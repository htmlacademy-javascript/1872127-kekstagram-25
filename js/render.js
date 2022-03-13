const photoTemplate = document.body.querySelector('#picture').content; // записываем в переменную содержимое шаблона, который будем копировать
const photoBox = document.body.querySelector('.pictures'); // записываем в переменную контейнер, в который будем вставлять фото др. пользователей

const renderPhoto = (photo) => {
  const photoElement = photoTemplate.cloneNode(true); // копируем шаблон и отрисовываем его в контейнере
  photoElement.querySelector('.picture__img').src = photo.url; // получаем данные 
  photoElement.querySelector('.picture__likes').textContent = photo.likes; // то же 
  photoElement.querySelector('.picture__comments').textContent = photo.comments.length; // то же
  return photoElement;
};

const renderPhotos = (photos) => {
  photos.forEach((item) => {
    photoBox.append(renderPhoto(item))
  });
};

export {renderPhotos};

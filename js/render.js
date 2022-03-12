const photoTemplate = document.body.querySelector('#picture').content // записываем в переменную содержимое шаблона, который будем копировать
const photoBox = document.body.querySelector('.pictures'); // записываем в переменную контейнер, в который будем вставлять фото др. пользователей

const renderPhoto = (photoElement) => {
  photoElement = photoTemplate.cloneNode(true); // копируем шаблон и отрисовываем его в контейнере
  photoBox.appendChild(photoElement); // отрисуем шаблон в контейнере для фотографий пользователей
  photoElement.querySelector('picture__img').src = photoElement.url; // получаем данные 
  photoElement.querySelector('.picture__likes').textContent = photoElement.likes; // то же 
  photoElement.querySelector('.picture__comments').length = photoElement.comments; // то же
  return photoElement;
}

const renderPhotos = (photos) => {
  photoBox.querySelectorAll('.picture').forEach((element) => element.remove())
  photoBox.append(photos.map(renderPhoto));
  return photos;
}

export {renderPhotos};

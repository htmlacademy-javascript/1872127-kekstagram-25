import {getInteger} from './util.js';
import {getRandomArrayElement} from './util.js';

const DESCRIPTION = [
  'Потрясающее времяпрепровождение на ближайшее время!',
  'Наконец-то могу в этом посте поделиться впечатлениями о путешествии',
  'Взял новую линзу для камеры, что скажете?',
  'Топ 10 приложений для обработки фотографий для профиля ниже',
  'Мы открываем набор на #курс',
];

const createComment = () => ({
  id: getInteger(1, 999),
  avatar: `img/avatar-${getInteger(1, 6)}.svg`,
  message: 'В целом всё неплохо. Но не всё.',
  name: 'Вениамин',
})

const OBJ_COUNT = 25;

const createPhoto = (id) => ({
  id,
  url: `photos/${getInteger(1, 25)}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getInteger(15, 200),
  comments: createComment(),
})

function createPhotos() {
  const photos = [];
  for (let i = 0; i < OBJ_COUNT; i++) {
    photos.push(createPhoto(i)); // записываем данные в массив
  }
  return photos;
}

export {createPhotos};

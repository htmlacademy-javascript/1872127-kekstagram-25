// Функция нахождения длины строки
// const stringLength = (inputText, maxLength) => {
//     return inputText.length <= maxLength;
// }
// stringLength('keksogram', 140);


// Функция генерации случайного числа из диапазона
function getInteger(minInt, maxInt) {
  if (minInt >= 0) {
    if (minInt < maxInt) {
      minInt = Math.ceil(minInt);
      maxInt = Math.floor(maxInt);
      return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
    }
    return Math.floor(Math.random() * (minInt - maxInt + 1)) + maxInt; // Меняем местами
  }
  return 'Не может быть меньше нуля';
}

// 1. Перевести данные в объект
const DESCRIPTION = [
  'Потрясающее времяпрепровождение на ближайшее время!',
  'Наконец-то могу в этом посте поделиться впечатлениями о путешествии',
  'Взял новую линзу для камеры, что скажете?',
  'Топ 10 приложений для обработки фотографий для профиля ниже',
  'Мы открываем набор на #курс',
];

function createComment() {
  return {
    id: getInteger(1, 999),
    avatar: `img/avatar-${getInteger(1, 6)}.svg`,
    message: 'В целом всё неплохо. Но не всё.',
    name: 'Вениамин',
  };
};

const OBJ_COUNT = 25;

// 2. Cоздать функцию, возвращающую случайный элемент массива, задействовав функцию function getInteger
function getRandomArrayElement(elements) {
  return elements[getInteger(0, elements.length - 1)];
};


// 3. Задействовать функцию function getRandomArrayElement и создать объект по созданию комментария:
function createPhoto(id) {
  return {
    id,
    url: `photos/${getInteger(1, 25)}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: getInteger(15, 200),
    comments: createComment(),
  };
};

// 4. Выполнить функцию
function createPhotos() {
  const photos = [];
  for (let i = 0; i < OBJ_COUNT; i++) {
    photos.push(createPhoto(i)); // записываем данные в массив
  }
  return photos;
};

createPhotos();

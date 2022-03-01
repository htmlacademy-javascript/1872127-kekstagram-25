/* Функция нахождения длины строки
const stringLength = (inputText, maxLength) => {
    return inputText.length <= maxLength;
}
stringLength('keksogram', 140);
*/

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

// 1. Превратить данные в объект
const RANDOM_ID = {
  getInteger(1, 25);
};

const RANDOM_URL = {
  'photos/' + getInteger(1, 25) + '.jpg';
};

const DESCRIPTION = {
  'Потрясающее времяпрепровождение на ближайшее время!',
  'Наконец-то могу в этом посте поделиться впечатлениями о путешествии',
  'Взял новую линзу для камеры, что скажете?',
  'Топ 10 приложений для обработки фотографий для профиля ниже',
  'Мы открываем набор на #курс',
};

const LIKES = {
  getInteger(15, 200);
};

const COMMENTS = {
  id: getInteger(1, 999),
  avatar: 'img/avatar-' + getInteger(1, 6) + '.svg',
  message: 'В целом всё неплохо. Но не всё.',
  name: 'Вениамин',
};

// 2. Написать функцию по созданию объекта
const createObj = () => {
  return {
    RANDOM_ID,
    RANDOM_URL,
    DESCRIPTION,
    LIKES,
    COMMENTS,
  };
};

const OBJ_COUNT = 25;

// 3. Cоздать функцию, возвращающую случайный элемент массива, задействовав функцию function getInteger
const getRandomArrayElement = (elements) => {
  return elements[getInteger(0, elements.length - 1)];
}


// 4. Задействовать функцию function getRandomArrayElement и создать объект по созданию комментария:
const createArray = () => {
  return {
    id: getRandomArrayElement(RANDOM_ID),
    url: getRandomArrayElement(RANDOM_URL),
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomArrayElement(LIKES),
    comments: getRandomArrayElement(COMMENTS),
  };
};

// 5. Генерируем сразу 25 объектов
const similarObj = Array.from({length: OBJ_COUNT}, createArray); // создать массив длиной 25 из билдера createArray

// 6. выполнить функцию
console.log(similarObj);

// Функция генерации случайного числа из диапазона
function getInteger(minInt, maxInt) {
  if (minInt >= 0) {
    if (minInt < maxInt) {
      minInt = Math.ceil(minInt);
      maxInt = Math.floor(maxInt);
      return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
    }
    return Math.floor(Math.random() * (minInt - maxInt + 1)) + maxInt;
  }
  return 'Не может быть меньше нуля';
}

// Функция, возвращающая случайный элемент массива
function getRandomArrayElement(elements) {
  return elements[getInteger(0, elements.length - 1)];
}

function isEscapeKey(evt) {
  return evt.key === 'Escape';
}

function isEnterKey (evt) {
  return evt.key === 'Enter';
}

// Функция взята из интернета и доработана
// Источник - https://www.freecodecamp.org/news/javascript-debounce-example
function debounce (callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {getInteger, getRandomArrayElement, isEscapeKey, isEnterKey, debounce};

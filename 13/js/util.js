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
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
}

// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_throttle
function throttle (callback, delayBetweenFrames) {
  // Используем замыкания, чтобы время "последнего кадра" навсегда приклеилось
  // к возвращаемой функции с условием, тогда мы его сможем перезаписывать
  let lastTime = 0;

  return (...rest) => {
    // Получаем текущую дату в миллисекундах,
    // чтобы можно было в дальнейшем
    // вычислять разницу между кадрами
    const now = new Date();

    // Если время между кадрами больше задержки,
    // вызываем наш колбэк и перезаписываем lastTime
    // временем "последнего кадра"
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
}

export {getInteger, getRandomArrayElement, isEscapeKey, isEnterKey, debounce, throttle};

// Функция нахождения длины строки
// const stringLength = (inputText, maxLength) => {
//     return inputText.length <= maxLength;
// }
// stringLength('keksogram', 140);

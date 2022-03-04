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

// Функция, возвращающая случайный элемент массива
function getRandomArrayElement(elements) {
  return elements[getInteger(0, elements.length - 1)];
}

export {getInteger};
export {getRandomArrayElement};

// Функция нахождения длины строки
// const stringLength = (inputText, maxLength) => {
//     return inputText.length <= maxLength;
// }
// stringLength('keksogram', 140);

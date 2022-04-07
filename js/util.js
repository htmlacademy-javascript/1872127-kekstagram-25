// const ALERT_SHOW_TIME = 5000;

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

function isEscapeKey(evt) {
  return evt.key === 'Escape';
}

function isEnterKey (evt) {
  return evt.key === 'Enter';
}

// const showAlert = (message) => {
//   const alertContainer = document.createElement('div');
//   alertContainer.style.zIndex = 100;
//   alertContainer.style.position = 'absolute';
//   alertContainer.style.left = 0;
//   alertContainer.style.top = 0;
//   alertContainer.style.right = 0;
//   alertContainer.style.padding = '10px 3px';
//   alertContainer.style.fontSize = '30px';
//   alertContainer.style.textAlign = 'center';
//   alertContainer.style.backgroundColor = 'red';

//   alertContainer.textContent = message;

//   document.body.append(alertContainer);

//   setTimeout(() => {
//     alertContainer.remove();
//   }, ALERT_SHOW_TIME);
// };

export {getInteger, getRandomArrayElement, isEscapeKey, isEnterKey/*, showAlert*/};

// Функция нахождения длины строки
// const stringLength = (inputText, maxLength) => {
//     return inputText.length <= maxLength;
// }
// stringLength('keksogram', 140);

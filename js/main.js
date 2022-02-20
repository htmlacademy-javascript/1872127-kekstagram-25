// Объявить функцию имя_функции(проверяемая_строка, максимальная_длина);
// Получить проверяемую_строку
// Перевести ее в числовое значение
// Сравнить его с максимально допустимой длиной
function stringLength(inputText, maxLength) {
  if (inputText.length <= maxLength) {
    return true;
  }
  return false;
};
stringLength('keksogram', 140);

// Объявить функцию имя_функции(от, до); // Результат: целое число из диапазона "от...до"
// Задать цикл, проверяющий соответствие диапазону
// Привести значения к целым числам через Math.floor (минимум для минимального) и Math.ceil (максимум для максимального)
// Частью воспользовался из: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getInteger(minInt, maxInt) {
  if (minInt >= 0 && minInt < maxInt) {
    minInt = Math.ceil(minInt);
    maxInt = Math.floor(maxInt);
    return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
  }
  if (minInt >= 0 && minInt > maxInt) {
    minInt = Math.ceil(minInt);
    maxInt = Math.floor(maxInt);
    return Math.floor(Math.random() * (minInt - maxInt + 1)) + maxInt; // Меняем местами
  }
  else {
    console.log('Не может быть меньше нуля');
  }
};
getInteger(-10, -2);

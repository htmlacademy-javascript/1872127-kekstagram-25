const sliderElement = document.querySelector('.effect-level__slider'); // записать сюда ползунок конкретного фильтра?
const valueElement = document.querySelector('.effect-level__value');
const imgUpload = document.querySelector('.img-upload__preview');

const effectNone = document.querySelector('#effect-none');
const effectChrome = document.querySelector('#effect-chrome');
const effectSepia = document.querySelector('#effect-sepia');
const effectMarvin = document.querySelector('#effect-marvin');
const effectPhobos = document.querySelector('#effect-phobos');
const effectHeat = document.querySelector('#effect-heat');

valueElement.value = 100;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
});

const effectNames = {
  none: {
    filterName: '',
    unit: '',
    options: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    },
  },
  chrome: {
    filterName: 'grayscale',
    unit: '',
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
  },
  sepia: {
    filterName: 'sepia',
    unit: '',
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
  },
  marvin: {
    filterName: 'invert',
    unit: '%',
    options: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    },
  },
  phobos: {
    filterName: 'blur',
    unit: 'px',
    options: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
  },
  heat: {
    filterName: 'brightness',
    unit: '',
    options: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
  },
};
// Эффект Оригинал
effectNone.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    imgUpload.input.classList.add('');
    sliderElement.noUiSlider.updateOptions(
      effectNames['none'].options
    );
  } else {
    imgUpload.input.classList.remove('');
    sliderElement.noUiSlider.updateOptions(
      effectNames['none'].options
    );
  }
});
// Эффект Хром
effectChrome.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    imgUpload.input.classList.add('effects__preview--chrome');
    sliderElement.noUiSlider.updateOptions(
      effectNames['chrome'].options
    );
  } else {
    imgUpload.input.classList.remove('effects__preview--chrome');
    sliderElement.noUiSlider.updateOptions(
      effectNames['none'].options
    );
  }
});
// Эффект Сепия
effectSepia.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    imgUpload.input.classList.add('effects__preview--sepia');
    sliderElement.noUiSlider.updateOptions(
      effectNames['sepia'].options
    );
  } else {
    imgUpload.input.classList.remove('effects__preview--sepia');
    sliderElement.noUiSlider.updateOptions(
      effectNames['none'].options
    );
  }
});
// Эффект Марвин
effectMarvin.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    imgUpload.input.classList.add('effects__preview--marvin');
    sliderElement.noUiSlider.updateOptions(
      effectNames['marvin'].options
    );
  } else {
    imgUpload.input.classList.remove('effects__preview--marvin');
    sliderElement.noUiSlider.updateOptions(
      effectNames['none'].options
    );
  }
});
// Эффект Фобос
effectPhobos.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    imgUpload.input.classList.add('effects__preview--phobos');
    sliderElement.noUiSlider.updateOptions(
      effectNames['phobos'].options
    );
  } else {
    imgUpload.input.classList.remove('effects__preview--phobos');
    sliderElement.noUiSlider.updateOptions(
      effectNames['none'].options
    );
  }
});
// Эффект Зной
effectHeat.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    imgUpload.input.classList.add('effects__preview--heat');
    sliderElement.noUiSlider.updateOptions(
      effectNames['heat'].options
    );
  } else {
    imgUpload.input.classList.remove('effects__preview--heat');
    sliderElement.noUiSlider.updateOptions(
      effectNames['none'].options
    );
  }
});

// Может пригодиться:
// sliderElement.setAttribute('disabled', true); отключение слайдера
// sliderElement.removeAttribute('disabled'); включение слайдера
// sliderElement.noUiSlider.destroy(); Удаление слайдера

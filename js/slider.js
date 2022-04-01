const sliderElement = document.querySelector('.effect-level__slider'); // записать сюда ползунок конкретного фильтра?
const valueElement = document.querySelector('.effect-level__value');
const imgUpload = document.querySelector('.img-upload__preview');

const effectControls = document.querySelectorAll('.effects__radio');
effectControls.forEach((effectControl) => effectControl.addEventListener('change', changeEffectHandler));

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
effectNone.changeEffectHandler = (evt) => {
  if (evt.target.checked) {
    imgUpload.classList = `img-upload__preview effects__preview--${'none'}`;
    sliderElement.noUiSlider.updateOptions(evt.target.value);
  }
};

// Эффект Хром
effectChrome.changeEffectHandler = (evt) => {
  if (evt.target.checked) {
    imgUpload.classList = `img-upload__preview effects__preview--${'chrome'}`;
    sliderElement.noUiSlider.updateOptions(
      effectNames[evt.target.value]
    );
  }
};

// Эффект Сепия
effectSepia.changeEffectHandler = (evt) => {
  if (evt.target.checked) {
    imgUpload.classList = `img-upload__preview effects__preview--${'sepia'}`;
    sliderElement.noUiSlider.updateOptions(
      effectNames[evt.target.value]
    );
  }
};

// Эффект Марвин
effectMarvin.changeEffectHandler = (evt) => {
  if (evt.target.checked) {
    imgUpload.classList = `img-upload__preview effects__preview--${'marvin'}`;
    sliderElement.noUiSlider.updateOptions(
      effectNames[evt.target.value]
    );
  }
};

// Эффект Фобос
effectPhobos.changeEffectHandler = (evt) => {
  if (evt.target.checked) {
    imgUpload.classList = `img-upload__preview effects__preview--${'phobos'}`;
    sliderElement.noUiSlider.updateOptions(
      effectNames[evt.target.value]
    );
  }
};

// Эффект Зной
effectHeat.changeEffectHandler = (evt) => {
  if (evt.target.checked) {
    imgUpload.classList = `img-upload__preview effects__preview--${'heat'}`;
    sliderElement.noUiSlider.updateOptions(
      effectNames[evt.target.value]
    );
  }
};

// Может пригодиться:
// sliderElement.setAttribute('disabled', true); отключение слайдера
// sliderElement.removeAttribute('disabled'); включение слайдера
// sliderElement.noUiSlider.destroy(); Удаление слайдера

const sliderElement = document.querySelector('.effect-level__slider');
const imgUploadPreview = document.querySelector('.img-upload__preview img');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectControls = document.querySelectorAll('.effects__radio');

const effectNames = {
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

const onSetEffectLevel = (evt) => {
  const effectName = evt.target.value;
  const effect = effectNames[effectName];

  if (!effect) {
    imgUploadPreview.classList.value = '';
    imgUploadPreview.style.filter = '';
    sliderElement.noUiSlider.destroy();
    return;
  }

  if (sliderElement.noUiSlider) {
    sliderElement.noUiSlider.off();
    sliderElement.noUiSlider.updateOptions(effect.options);
  } else {
    noUiSlider.create(sliderElement, effect.options);
  }

  imgUploadPreview.classList.value = `effect__preview--${effectName}`;
  sliderElement.noUiSlider.on('update', (_, handle, unencoded) => {
    const value = unencoded[handle];
    effectLevelValue.value = value;
    imgUploadPreview.style.filter = `${effect.filterName}(${value}${effect.unit})`;
  });
};

effectControls.forEach((effectControl) => effectControl.addEventListener('change', onSetEffectLevel));

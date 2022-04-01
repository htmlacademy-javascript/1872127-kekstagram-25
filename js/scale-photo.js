const controlSmaller = document.querySelector('.scale__control--smaller');
const controlBigger = document.querySelector('.scale__control--bigger');
const controlValue = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview img');

const SCALE_MIN = 25;
const SCALE_MAX = 100;
const SCALE_STEP = 25;
const SCALE_DEFAULT = 100;

const runDefaultScale = () => {
  controlValue.value = SCALE_DEFAULT;
  imgUploadPreview.style.cssText = 'transform: scale(1)';
};

const onButton = () => {
  controlSmaller.addEventListener('click', () => {
    const amount = controlValue.value - SCALE_STEP;
    imgUploadPreview.style.cssText = `transform: scale(0.'${amount}')`;
    controlValue.value = amount;
  });

  controlBigger.addEventListener('click', () => {
    const amount = controlValue.value + SCALE_STEP;
    imgUploadPreview.style.cssText = `transform: scale(0.'${amount}')`;
    controlValue.value = amount;
  });
};

controlValue.onchange = () => {
  if (controlValue.value <= SCALE_MAX && controlValue.value >= SCALE_MIN) {
    onButton();
  }
  else {
    runDefaultScale();
  }
};


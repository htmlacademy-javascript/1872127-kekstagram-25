const SCALE_MIN = 0.25;
const SCALE_MAX = 1;
const SCALE_STEP = 0.25;
const SCALE_DEFAULT = 100;
const IS_HUNDRED = 100;

const controlSmaller = document.querySelector('.scale__control--smaller');
const controlBigger = document.querySelector('.scale__control--bigger');
const controlValue = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview img');

const runDefaultScaleHandler = () => {
  controlValue.value = `${SCALE_DEFAULT}%`;
  imgUploadPreview.style.transform = 'scale(1)';
};

controlSmaller.addEventListener('click', () => {
  const value = Number(controlValue.value.replace('%', ''));
  if ((value / IS_HUNDRED) !== SCALE_MIN) {
    const amount = value / IS_HUNDRED - SCALE_STEP;
    imgUploadPreview.style.transform = `scale(${amount})`;
    controlValue.value = `${amount * IS_HUNDRED}%`;
  }
});

controlBigger.addEventListener('click', () => {
  const value = Number(controlValue.value.replace('%', ''));
  if ((value / IS_HUNDRED) !== SCALE_MAX) {
    const amount = value / IS_HUNDRED + SCALE_STEP;
    imgUploadPreview.style.transform = `scale(${amount})`;
    controlValue.value = `${amount * IS_HUNDRED}%`;
  }
});

export {runDefaultScaleHandler};

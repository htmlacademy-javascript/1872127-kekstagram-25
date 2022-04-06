const controlSmaller = document.querySelector('.scale__control--smaller');
const controlBigger = document.querySelector('.scale__control--bigger');
const controlValue = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview img');

const SCALE_MIN = 0.25;
const SCALE_MAX = 1;
const SCALE_STEP = 0.25;
const SCALE_DEFAULT = 100;

const runDefaultScale = () => {
  controlValue.value = `${SCALE_DEFAULT}%`;
  imgUploadPreview.style.transform = 'scale(1)';
};

controlSmaller.addEventListener('click', () => {
  const value = Number(controlValue.value.replace('%', ''));
  if ((value / 100) !== SCALE_MIN) {
    const amount = value / 100 - SCALE_STEP;
    imgUploadPreview.style.transform = `scale(${amount})`;
    controlValue.value = `${amount * 100}%`;
  }
});

controlBigger.addEventListener('click', () => {
  const value = Number(controlValue.value.replace('%', ''));
  if ((value / 100) !== SCALE_MAX) {
    const amount = value / 100 + SCALE_STEP;
    imgUploadPreview.style.transform = `scale(${amount})`;
    controlValue.value = `${amount * 100}%`;
  }
});

export {runDefaultScale};

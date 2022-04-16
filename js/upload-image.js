const picturePreview = document.querySelector('.img-upload__input');
const preview = document.querySelector('.img-upload__preview img');
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const initUploadImage = () => {
  picturePreview.addEventListener('change', () => {
    const file = picturePreview.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
    if (matches) {
      preview.src = URL.createObjectURL(file);
    }
  });
};
export{initUploadImage};

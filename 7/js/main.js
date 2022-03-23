import {createPhotos} from './data.js';
import {renderPhotos} from './render.js';
import {modalPhotos} from './processing-modal.js';
import {initUploadWindow} from './validator.js';
const photos = createPhotos();
renderPhotos(photos);
modalPhotos();
initUploadWindow();

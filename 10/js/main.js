import {createPhotos} from './data.js';
import {renderPhotos} from './render.js';
import {renderModalPhotos} from './processing-modal.js';
import {initUploadWindow} from './validator.js';
const photos = createPhotos();
renderPhotos(photos);
renderModalPhotos();
initUploadWindow();

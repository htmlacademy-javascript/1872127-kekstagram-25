import {createPhotos} from './data.js';
import {renderPhotos} from './render.js';
import {modalPhotos} from './processing-modal.js';
const photos = createPhotos();
renderPhotos(photos);
modalPhotos();

// // импорт модуля для консоли браузера
// import('/js/data.js').then((m) => dataModule = m);
// // использование функций модуля
// dataModule.createPhotos();

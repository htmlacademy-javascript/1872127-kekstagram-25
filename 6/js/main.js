import {createPhotos} from './data.js';
import {renderPhotos} from './render.js';

createPhotos();
const photos = createPhotos();
renderPhotos(photos);

// // импорт модуля для консоли браузера
// import('/js/data.js').then((m) => dataModule = m);
// // использование функций модуля
// dataModule.createPhotos();

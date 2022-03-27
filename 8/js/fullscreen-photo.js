import {isEscapeKey} from './util.js';
const bigPicture = document.querySelector('.big-picture');
const commentsList = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('#commentary').content.querySelector('.social__comment');

const renderCommentAuthor = (comment) => {
  const commentElement = commentTemplate.cloneNode(true);
  commentElement.querySelector('.social__picture').src = comment.avatar;
  commentElement.querySelector('.social__picture').alt = comment.name;
  commentElement.querySelector('.social__text').textContent = comment.message;
  return commentElement;
};

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFullscreenPhoto();
  }
};

function closeFullscreenPhoto () {
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscKeydown);
}

const openFullscreenPhoto = (photo) => {
  bigPicture.querySelector('.big-picture__img').src = photo.url;
  bigPicture.querySelector('.likes-count').textContent = photo.likes;
  bigPicture.querySelector('.comments-count').textContent = photo.comments.length;
  bigPicture.querySelector('.social__caption').textContent = photo.description;
  bigPicture.classList.remove('hidden');
  commentsList.append(...photo.comments.map(renderCommentAuthor));
  bigPicture.querySelector('.big-picture__cancel').addEventListener('click', () => {
    closeFullscreenPhoto();
  });
  document.addEventListener('keydown', onPopupEscKeydown);
};

// const showMoreComments = () => {
//   bigPicture.querySelector('.social__comment-count').classList.remove('hidden');
//   bigPicture.querySelector('.comments-loader').classList.remove('hidden');
// };

export {openFullscreenPhoto};

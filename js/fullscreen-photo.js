import {isEscapeKey} from './util.js';
const bigPicture = document.querySelector('.big-picture');
const commentsList = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('#commentary').content.querySelector('.social__comment');
const commentsLoader = bigPicture.querySelector('.comments-loader');


const MAX_COMMENTS = 5;
const comments = [];


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
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
}

const openFullscreenPhoto = (photo) => {
  bigPicture.querySelector('.big-picture__img img').src = photo.url;
  bigPicture.querySelector('.likes-count').textContent = photo.likes;
  bigPicture.querySelector('.comments-count').textContent = photo.comments.length;
  bigPicture.querySelector('.social__caption').textContent = photo.description;

  bigPicture.querySelector('.social__comment-count').classList.remove('hidden');
  bigPicture.classList.remove('hidden');
  commentsList.innerHTML='';
  comments.length = 0;
  comments.push(...photo.comments);

  if (photo.comments.length > MAX_COMMENTS) {
    commentsLoader.classList.remove('hidden');
  } else {
    commentsLoader.classList.add('hidden');
  }
  commentsList.append(...photo.comments.slice(0, MAX_COMMENTS).map(renderCommentAuthor));
  document.addEventListener('keydown', onPopupEscKeydown);
};


bigPicture.querySelector('.big-picture__cancel').addEventListener('click', closeFullscreenPhoto);
commentsLoader.addEventListener('click', () => {
  const renderedCommentsCount = bigPicture.querySelectorAll('.social__comment').length;
  commentsList.append(...comments.slice(renderedCommentsCount, renderedCommentsCount + MAX_COMMENTS).map(renderCommentAuthor));
  if (renderedCommentsCount + MAX_COMMENTS >= comments.length) {
    commentsLoader.classList.add('hidden');
  }
});


export {openFullscreenPhoto};

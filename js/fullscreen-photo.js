import {isEscapeKey} from './util.js';
const MAX_COMMENTS = 5;

const bigPicture = document.querySelector('.big-picture');
const commentsList = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('#commentary').content.querySelector('.social__comment');
const commentsLoader = bigPicture.querySelector('.comments-loader');

const comments = [];


const onCommentAuthor = (comment) => {
  const commentElement = commentTemplate.cloneNode(true);
  commentElement.querySelector('.social__picture').src = comment.avatar;
  commentElement.querySelector('.social__picture').alt = comment.name;
  commentElement.querySelector('.social__text').textContent = comment.message;
  return commentElement;
};

function onPopupEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePhotoHandler();
  }
}

function closePhotoHandler () {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
}

const openPhotoHandler = (photo) => {
  bigPicture.querySelector('.big-picture__img img').src = photo.url;
  bigPicture.querySelector('.likes-count').textContent = photo.likes;
  const toShow = photo.comments.length > MAX_COMMENTS ? MAX_COMMENTS : photo.comments.length;
  bigPicture.querySelector('.social__comment-count').textContent = `${toShow} из ${photo.comments.length} комментариев`;
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
  commentsList.append(...photo.comments.slice(0, MAX_COMMENTS).map(onCommentAuthor));
  document.addEventListener('keydown', onPopupEscKeydown);
};


bigPicture.querySelector('.big-picture__cancel').addEventListener('click', closePhotoHandler);
commentsLoader.addEventListener('click', () => {
  const renderedCommentsCount = bigPicture.querySelectorAll('.social__comment').length;
  const nextStep = renderedCommentsCount + MAX_COMMENTS;
  const toShow = nextStep > comments.length ? comments.length : nextStep;
  bigPicture.querySelector('.social__comment-count').textContent = `${toShow} из ${comments.length} комментариев`;
  commentsList.append(...comments.slice(renderedCommentsCount, nextStep).map(onCommentAuthor));
  if (nextStep >= comments.length) {
    commentsLoader.classList.add('hidden');
  }
});


export {openPhotoHandler};

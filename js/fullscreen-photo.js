const bigPicture = document.querySelector('.big-picture');
const commentsList = document.querySelector('.social__comments');
// const commentItem = document.querySelector('.social__comment');
const commentTemplate = document.querySelector('#commentary').content;

const fullscreenPhoto = (photo) => {
  bigPicture.querySelector('.big-picture__img').src = photo.url;
  bigPicture.querySelector('.likes-count').textContent = photo.likes;
  bigPicture.querySelector('.comments-count').textContent = photo.comments.length;
  bigPicture.querySelector('.social__caption').textContent = photo.description;
  bigPicture.classList.remove('hidden');
};

const commentAuthor = (comment) => {
  const commentElement = commentTemplate.cloneNode(true);
  // commentItem.appendChild(commentElement);
  commentElement.querySelector('.social__picture').src = comment.avatar;
  commentElement.querySelector('.social__picture').alt = comment.name;
  commentElement.querySelector('.social__text').textContent = comment.message;
  return commentElement;
};

commentsList.append(photo.comments.map(commentAuthor));

export {fullscreenPhoto};

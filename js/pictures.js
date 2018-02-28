'use strict';

var getRandomNumber = function (a, b) {
  var rand = a + Math.round(((b - a) * Math.random()));
  return rand;
};

var commentsExamples = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

var getArrayPictures = function () {
  var tempPictures = [];
  var tempComments = [];
  for (var i = 0; i < 24; i++) {
    var objectPhoto = { };
    var indexPhoto = i + 1;
    indexPhoto = indexPhoto + '';
    objectPhoto.url = 'photos/' + indexPhoto + '.jpg';
    objectPhoto.likes = getRandomNumber(15, 200);
    for (var j = 0; j < 2; j++) {
      tempComments[j] = commentsExamples[getRandomNumber(0, 5)];
    }
    objectPhoto.comments = tempComments;
    tempPictures[i] = objectPhoto;
  }
  return tempPictures;
};

var pictures = getArrayPictures();
var pictureTemplate = document.querySelector('#picture-template').content; // Переменная блока темплейт
var renderPicture = function (picture, index) { // Функция создания ДОМ-элементов на основе шаблона  темплейт для массива pictures

  var pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('img').setAttribute('src', picture.url);
  pictureElement.querySelector('img').setAttribute('data-element-id', index);
  pictureElement.querySelector('.picture-comments').textContent = picture.comments;
  pictureElement.querySelector('.picture-likes').textContent = picture.likes;
  return pictureElement;
};

var picturesDraw = document.querySelector('.pictures');
var paintingPictures = function (array) { // Функция отрисовки ДОМ-элементов методом document fragment массива pictures
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < array.length - 1; i++) {
    fragment.appendChild(renderPicture(array[i], i));
  }
  picturesDraw.appendChild(fragment);
};

paintingPictures(pictures);

var pictureElements = document.querySelectorAll('.picture');
var galleryOverlayComments = document.querySelector('.comments-count');
var galleryOverlayLikes = document.querySelector('.likes-count');
var galleryOverlayImage = document.querySelector('.gallery-overlay-image');
var galleryOverlayClose = document.querySelector('.gallery-overlay-close');

var galleryOverlayClick = function (evt) {
  evt.preventDefault();
  var currentId = evt.target.getAttribute('data-element-id');
  document.querySelector('.gallery-overlay').classList.remove('hidden');
  galleryOverlayImage.setAttribute('src', pictures[currentId].url);
  galleryOverlayComments.textContent = pictures[currentId].comments.length;
  galleryOverlayLikes.textContent = pictures[currentId].likes;
};

var galleryOverlayClickClose = function () {
  document.querySelector('.gallery-overlay').classList.add('hidden');
};

var galleryEsc = function (evt) {
  if (evt.keyCode === 27) {
    document.querySelector('.gallery-overlay').classList.add('hidden');
  }
};

for (var i = 0; i < pictureElements.length; i++) {
  pictureElements[i].addEventListener('click', galleryOverlayClick);

  galleryOverlayClose.addEventListener('click', galleryOverlayClickClose);

  document.addEventListener('keydown', galleryEsc);
}

var uploadFile = document.querySelector('#upload-file');
var uploadOverlay = document.querySelector('.upload-overlay');
var uploadCancel = document.querySelector('#upload-cancel');
// var uploadEffect = document.querySelector('.upload-effect');
// var uploadForm = document.querySelector('#upload-select-image');

var formReset = function (evt) {
  uploadFile.target.reset();
};

var uploadFileClose = function () {
  formReset;
  uploadOverlay.classList.add('hidden');
};

var uploadFileEsc = function (evt) {
  if (evt.keyCode === 27) {
    formReset;
    uploadOverlay.classList.add('hidden');
  }
};

var uploadFileOpen = function () {
  uploadOverlay.classList.remove('hidden');
};

uploadFile.addEventListener('change', uploadFileOpen);
uploadCancel.addEventListener('click', uploadFileClose);
uploadCancel.addEventListener('click', uploadFileEsc);

// var uploadEffectLevelPin = document.querySelector('upload-effect-level-pin');

// var uploadLevelPin = function () {

// }

// uploadEffectLevelPin.addEventListener('mouseup', uploadLevelPin);

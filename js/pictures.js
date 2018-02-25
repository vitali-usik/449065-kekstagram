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
var renderPicture = function (picture) { // Функция создания ДОМ-элементов на основе шаблона  темплейт для массива pictures

  var pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('img').setAttribute('src', picture.url);
  pictureElement.querySelector('.picture-comments').textContent = picture.comments;
  pictureElement.querySelector('.picture-likes').textContent = picture.likes;
  return pictureElement;
};

var picturesDraw = document.querySelector('.pictures');
var paintingPictures = function (array) { // Функция отрисовки ДОМ-элементов методом document fragment массива pictures
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < array.length - 1; i++) {
    fragment.appendChild(renderPicture(array[i]));
  }
  picturesDraw.appendChild(fragment);
};

paintingPictures(pictures);

var pictureElements = document.querySelectorAll('.picture');
var galleryOverlayComments = document.querySelector('.gallery-overlay-controls-comments');
var galleryOverlayLikes = document.querySelector('.gallery-overlay-controls-like');
var galleryOverlayImage = document.querySelector('.gallery-overlay-image');
var galleryOverlayClose = document.querySelector('.gallery-overlay-close');

var galleryOverlayClick = function () {
  document.querySelector('.gallery-overlay').classList.remove('hidden');
  galleryOverlayImage.setAttribute('src', pictures[i].url);
  galleryOverlayComments.textContent = pictures[i].comments;
  galleryOverlayLikes.textContent = pictures[i].likes;
};

var galleryOverlayClickClose = function () {
  document.querySelector('.gallery-overlay').classList.add('hidden');
};

var galleryEsc = function (evt) {
  if (evt.keyCode === 27) {
    document.querySelector('.gallery-overlay').classList.add('hidden');
  }
};

for (var i = 1; i < pictureElements.length; i++) {
  pictureElements[i].addEventListener('click', galleryOverlayClick);

  galleryOverlayClose.addEventListener('click', galleryOverlayClickClose);

  document.addEventListener('keydown', galleryEsc);
}

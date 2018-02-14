'use strict';

var pictureTemplate = document.querySelector('#picture-template').content; // Переменная блока темплейт

var galleryOverlay = document.querySelector('.gallery-overlay').content;

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

var likesGenaration = getRandomNumber(15, 200);

var commentsIndexGeneration = getRandomNumber(0, 5);

var pictures = [];

var getArrayPictures = function(array) {
  for (var i = 0; i < 24; i++) {
    var objectPhoto = { };
    var indexPhoto = i + 1;
    objectPhoto.url = 'photos/indexPhoto.jpg';
    objectPhoto.likes = getRandomNumber(15, 200);
    objectPhoto.comments = commentsExamples[getRandomNumber(0, 5)];
    pictures[i] = objectPhoto;
  }
};

getArrayPictures(pictures);

var renderPicture = function (picture) {

  var pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('img').setAttribute(src, picture.url); 
  pictureElement.querySelector('.picture-comments').TextContent = picture.comments;
  pictureElement.querySelector('.picture-likes').TextContent = picture.likes;

  return pictureElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < pictures.length - 1; i++) {

  fragment.appendChild(renderPicture(pictures[i]));
}

document.querySelector('.gallery-overlay').classList.remove('hidden');

galleryOverlay.cloneNode(true);

galleryOverlay.querySelector('imgSrc').value = pictures.url[0];
galleryOverlay.querySelector('.comments-count').TextContent = pictures.comments[0];
galleryOverlay.querySelector('.likes-count').TextContent = pictures.likes[0];

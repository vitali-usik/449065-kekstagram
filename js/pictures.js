'use strict';

var pictureTemplate = document.querySelector('#picture-template').content; // Переменная блока темплейт

var GalleryOverlay = document.querySelector('.gallery-overlay').content;

var randomNumber = function (a, b) {
  var rand = a + Math.round(((b - a) * Math.random()));
  return rand;
};

var COMMENTS_GENERATION = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

var Likes = randomNumber(15, 200);

var COMENTS_INDEX = randomNumber(0, 5);

var PICTURES_URL = [];

var ArrayPhotos = function () {  

  for (var i = 0; i < 24; i++) {

    PICTURES_URL[i] = 'photos/{{i}}.jpg';

  }
  return PICTURES_URL;
};

var PhotosArray = ArrayPhotos();

var pictures = [];

var ArrayPictures = function () {

  for (var i = 0; i < 24; i++) {
    pictures.url[i] = PICTURES_URL[i];
    pictures.likes[i] = Likes;
    pictures.comments[i] = COMMENTS_GENERATION[COMENTS_INDEX]; 
  }
  return pictures;
}; 

var PicturesGeneration = ArrayPictures();

var renderPicture = function (picture) {

  var pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('imgSrc').value = picture.url;
  pictureElement.querySelector('.picture-comments').TextContent = picture.comments;
  pictureElement.querySelector('.picture-likes').TextContent = picture.likes;

  return pictureElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < pictures.length - 1; i++) {

  fragment.appendChild(renderPicture(pictures[i]));
}

document.querySelector('.gallery-overlay').classList.remove('hidden');

GalleryOverlay.cloneNode(true);

GalleryOverlay.querySelector('imgSrc').value = pictures[0].url;
GalleryOverlay.querySelector('.comments-count').TextContent = pictures[0].comments;
GalleryOverlay.querySelector('.likes-count').TextContent = pictures[0].likes;

var arrayLength = 25;
var ArrayPhotos = [];
var randomNumber = function (a, b) {
  var rand = a + Math.round(((b-a) * Math.random()));
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

var ArrayPictures = function (arr ,N) {
  for (var i = 0; i < N - 1; i++) {
    arr[i] = 'photos/{{i}}.jpg';
   }
  }



var PICTURES_URL = ArrayPictures( ArrayPhotos,arrayLength);

var pictures = [
  {
    url: PICTURES_URL[0],
    likes: Likes,
    comments: COMMENTS_GENERATION[COMENTS_INDEX]
},
  {
    url: PICTURES_URL[1],
    likes: Likes,
    comments: COMMENTS_GENERATION[COMENTS_INDEX]
  },
  {
    url: PICTURES_URL[2],
    likes: Likes,
    comments: COMMENTS_GENERATION[COMENTS_INDEX]
  },
  {
    url: PICTURES_URL[3],
    likes: Likes,
    comments: COMMENTS_GENERATION[COMENTS_INDEX]
  },
  {
    url: PICTURES_URL[4],
    likes: Likes,
    comments: COMMENTS_GENERATION[COMENTS_INDEX]
  },
  {
    url: PICTURES_URL[5],
    likes: Likes,
    comments: COMMENTS_GENERATION[COMENTS_INDEX]
  },
  {
    url: PICTURES_URL[6],
    likes: Likes,
    comments: COMMENTS_GENERATION[COMENTS_INDEX]
  },
  {
    url: PICTURES_URL[7],
    likes: Likes,
    comments: COMMENTS_GENERATION[COMENTS_INDEX]
  },
  {
    url: PICTURES_URL[8],
    likes: Likes,
    comments: COMMENTS_GENERATION[COMENTS_INDEX]
  },
  {
    url: PICTURES_URL[9],
    likes: Likes,
    comments: COMMENTS_GENERATION[COMENTS_INDEX]
  },
  {
    url: PICTURES_URL[10],
    likes: Likes,
    comments: COMMENTS_GENERATION[COMENTS_INDEX]
  },
  {
    url: PICTURES_URL[11],
    likes: Likes,
    comments: COMMENTS_GENERATION[COMENTS_INDEX]
  },
  {
    url: PICTURES_URL[12],
    likes: Likes,
    comments: COMMENTS_GENERATION[COMENTS_INDEX]
  },
  {
    url: PICTURES_URL[13],
    likes: Likes,
    comments: COMMENTS_GENERATION[COMENTS_INDEX]
  },
  {
    url: PICTURES_URL[14],
    likes: Likes,
    comments: COMMENTS_GENERATION[COMENTS_INDEX]
  },
  {
    url: PICTURES_URL[15],
    likes: Likes,
    comments: COMMENTS_GENERATION[COMENTS_INDEX]
  },
  {
    url: PICTURES_URL[16],
    likes: Likes,
    comments: COMMENTS_GENERATION[COMENTS_INDEX]
  },
  {
    url: PICTURES_URL[17],
    likes: Likes,
    comments: COMMENTS_GENERATION[COMENTS_INDEX]
  },
  {
    url: PICTURES_URL[18],
    likes: Likes,
    comments: COMMENTS_GENERATION[COMENTS_INDEX]
  },
  {
    url: PICTURES_URL[19],
    likes: Likes,
    comments: COMMENTS_GENERATION[COMENTS_INDEX]
  },
  {
    url: PICTURES_URL[20],
    likes: Likes,
    comments: COMMENTS_GENERATION[COMENTS_INDEX]
  },
  {
    url: PICTURES_URL[21],
    likes: Likes,
    comments: COMMENTS_GENERATION[COMENTS_INDEX]
  },
  {
    url: PICTURES_URL[22],
    likes: Likes,
    comments: COMMENTS_GENERATION[COMENTS_INDEX]
  },
  {
    url: PICTURES_URL[23],
    likes: Likes,
    comments: COMMENTS_GENERATION[COMENTS_INDEX]
  },
  {
    url: PICTURES_URL[24],
    likes: Likes,
    comments: COMMENTS_GENERATION[COMENTS_INDEX]
  },
];

var renderPicture = function(pictures) {

  var pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('img[src]').TextContent = pictures[i].url;
  pictureElement.querySelector('.picture-comments').TextContent = pictures[i].comments;
  pictureElement.querySelector('.picture-likes').TextContent = pictures[i].likes;

  return pictureElement;
}

var pictureTemplate = document.querySelector('#picture-template').content; /.. Переменная блока темплейт ../

var fragment = document.createDocumentFragment();

for (var i = 0; i < pictures.length; i++) {

  fragment.appendChild(renderPicture(pictures[i]));
}

document.querySelector('.gallery-overlay').classList.remove('hidden');
pictureElement.querySelector('.gallery-overlay-image.img[src]').TextContent = pictures[0].url;
pictureElement.querySelector('.comments-count').TextContent = pictures[0].comments;
pictureElement.querySelector('.likes-count').TextContent = pictures[0].likes;

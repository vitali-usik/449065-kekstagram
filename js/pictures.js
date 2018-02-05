var randomLikes = function (a, b) {
  var rand = a + Math.round((b * Math.random()));
};

var COMMENTS_GENERATION = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

var Likes = randomLikes(15, 185);

var COMENTS_INDEX = randomLikes(1, 6);

var PICTURES_URL = [
  photos/{{0}}.jpg,
photos/{{1}}.jpg,
photos/{{2}}.jpg,
photos/{{3}}.jpg,
photos/{{4}}.jpg,
photos/{{5}}.jpg,
photos/{{6}}.jpg,
photos/{{7}}.jpg,
photos/{{8}}.jpg,
photos/{{9}}.jpg,
photos/{{10}}.jpg,
photos/{{11}}.jpg,
photos/{{12}}.jpg,
photos/{{13}}.jpg,
photos/{{14}}.jpg,
photos/{{15}}.jpg,
photos/{{16}}.jpg,
photos/{{17}}.jpg,
photos/{{18}}.jpg,
photos/{{19}}.jpg,
photos/{{20}}.jpg,
photos/{{21}}.jpg,
photos/{{22}}.jpg,
photos/{{23}}.jpg,
photos/{{24}}.jpg
];

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

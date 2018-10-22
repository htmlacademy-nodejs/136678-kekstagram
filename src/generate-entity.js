'use strict';

const {
  Like,
  Scale,
  Hashtag,
  EFFECTS,
  COMMENTS,
  HASHTAGS,
  DESCRIPTIONS,
  DATE_INTERVAL_IN_MS
} = require(`./constants`);

const getRandomNumber = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomElement = (array) => array[getRandomNumber(array.length - 1)];

const generateDate = () => {
  const date = Date.now();
  return getRandomNumber(date, date - DATE_INTERVAL_IN_MS);
};

const generateHashtags = () => {
  let hashtags = [];
  const amount = getRandomNumber(Hashtag.QUANTITY);

  while (hashtags.length <= amount) {
    hashtags.push(getRandomElement(HASHTAGS));
  }
  return hashtags;
};

const generateComments = () => {
  let comments = [];

  const amount = getRandomNumber(COMMENTS.length);
  while (comments.length <= amount) {
    comments.push(getRandomElement(COMMENTS));
  }
  return comments;
};

const generateEntity = () => {
  return {
    url: `https://picsum.photos/600/?random`,
    scale: getRandomNumber(Scale.MAX, Scale.MIN),
    effect: getRandomElement(EFFECTS),
    hashtags: generateHashtags(),
    description: getRandomElement(DESCRIPTIONS),
    likes: getRandomNumber(Like.MAX, Like.MIN),
    comments: generateComments(),
    date: generateDate(),
  };
};

module.exports = generateEntity;

'use strict';

const {
  Like,
  Scale,
  Hashtag,
  EFFECTS,
  COMMENTS,
  HASHTAGS,
  DESCRIPTIONS,
  DEFAULT_URL,
  DATE_INTERVAL_IN_MS
} = require(`./constants`);

const getRandomNumber = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomElement = (array) => array[getRandomNumber(array.length - 1)];

const generateDate = () => {
  const date = Date.now();
  return getRandomNumber(date, date - DATE_INTERVAL_IN_MS);
};

const generateContent = (data, maxAmount) => {
  let content = [];

  const amount = getRandomNumber(maxAmount);

  while (content.length <= amount) {
    const newValue = getRandomElement(data);
    if (content.indexOf(newValue) === -1) {
      content.push(newValue);
    }
  }
  return content;
};

const generateEntity = () => {
  return {
    url: DEFAULT_URL,
    scale: getRandomNumber(Scale.MAX, Scale.MIN),
    effect: getRandomElement(EFFECTS),
    hashtags: generateContent(HASHTAGS, Hashtag.QUANTITY),
    description: getRandomElement(DESCRIPTIONS),
    likes: getRandomNumber(Like.MAX, Like.MIN),
    comments: generateContent(COMMENTS, COMMENTS.length),
    date: generateDate(),
  };
};

module.exports = generateEntity;

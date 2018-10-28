'use strict';

const DEFAULT_URL = `https://picsum.photos/600/?random`;

const DESCRIPTIONS_MAX_LENGTH = 140;
const COMMENTS_MAX_LENGTH = 140;
const DATE_INTERVAL_IN_MS = 1000 * 60 * 60 * 24 * 7;

const COMMENTS = [
  `Всё отлично!`,
  `В целом всё неплохо. Но не всё.`,
  `Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.`,
  `Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.`,
  `Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.`,
  `Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!`
];

const DESCRIPTIONS = [
  `Тестим новую камеру!`,
  `Затусили с друзьями на море`,
  `Как же круто тут кормят`,
  `Отдыхаем...`,
  `Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......`,
  `Вот это тачка!`
];

const HASHTAGS = [
  `#love`,
  `#instagood`,
  `#photooftheday`,
  `#beautiful`,
  `#fashion`,
  `#happy`,
  `#followme`,
  `#like4like`,
  `#follow`,
  `#me`,
  `#picoftheday`,
  `#selfie`,
  `#instadaily`,
  `#friends`,
  `#summer`,
  `#girl`,
  `#art`,
  `#fun`,
];

const EFFECTS = [
  `none`,
  `chrome`,
  `sepia`,
  `marvin`,
  `phobos`,
  `heat`,
];

const Like = {
  MIN: 0,
  MAX: 1000,
};

const Scale = {
  MIN: 0,
  MAX: 100,
};

const Hashtag = {
  QUANTITY: 5,
  HASH_SYMBOL: `#`,
  MAX_LENGTH: 20
};

module.exports = {
  Like,
  Scale,
  Hashtag,
  EFFECTS,
  COMMENTS,
  HASHTAGS,
  DESCRIPTIONS,
  DEFAULT_URL,
  DESCRIPTIONS_MAX_LENGTH,
  COMMENTS_MAX_LENGTH,
  DATE_INTERVAL_IN_MS
};

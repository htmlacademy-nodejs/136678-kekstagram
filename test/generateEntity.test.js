'use strict';

const assert = require(`assert`);
const generateEntity = require(`../src/generate-entity`);

const {
  Like,
  Scale,
  Hashtag,
  EFFECTS,
  DESCRIPTIONS_MAX_LENGTH,
  COMMENTS_MAX_LENGTH,
  DATE_INTERVAL_IN_MS
} = require(`../src/constants`);

const entity = generateEntity();

const checkComments = entity.comments.some((item) => typeof item === `string`);
const checkCommentsLength = entity.comments.some((item) => item.length <= COMMENTS_MAX_LENGTH);
const checkHashtagFirstSymbol = entity.hashtags.every((item) => item.startsWith(Hashtag.HASH_SYMBOL));
const checkHashtagsSpaces = entity.hashtags.some((item) => item.includes(` `));
const checkHashtagsLength = entity.hashtags.some((item) => item.length > Hashtag.MAX_LENGTH);

const checkUniqueValue = (arr) => {
  const obj = {};
  for (const item of arr) {
    obj[item] = true;
  }
  return Object.keys(obj).length === arr.length;
};

describe(`Data Generator`, function () {
  describe(`Check image url`, () => {
    it(`is string`, () => {
      assert.equal(typeof entity.url, `string`);
    });
  });

  describe(`Check default image url`, () => {
    it(`check correct value`, () => {
      assert.equal(entity.url, `https://picsum.photos/600/?random`);
    });
  });

  describe(`Check likes`, () => {
    it(`is number`, () => {
      assert.equal(typeof entity.likes, `number`);
    });
    it(`is in range 0 - 1000`, () => {
      assert.equal(entity.likes >= Like.MIN && entity.likes <= Like.MAX, true);
    });
  });

  describe(`Check scale`, () => {
    it(`is number`, () => {
      assert.equal(typeof entity.scale, `number`);
    });
    it(`is in range 0 - 100`, () => {
      assert.equal(entity.scale >= Scale.MIN && entity.scale <= Scale.MAX, true);
    });
  });

  describe(`Check effect value`, () => {
    it(`is string`, () => {
      assert.equal(typeof entity.effect, `string`);
    });
    it(`is in default effects array`, () => {
      assert.equal(EFFECTS.includes(entity.effect), true);
    });
  });

  describe(`Check description`, () => {
    it(`is string`, () => {
      assert.equal(typeof entity.description, `string`);
    });
    it(`description of the correct length`, () => {
      assert.equal(entity.description.length < DESCRIPTIONS_MAX_LENGTH, true);
    });
  });

  describe(`check comments`, () => {
    it(`is array`, () => {
      assert.equal(Array.isArray(entity.comments), true);
    });
    it(`items are string`, () => {
      if (entity.comments.length !== 0) {
        assert(checkComments);
      }
    });
    it(`items of the correct length`, () => {
      if (entity.comments.length !== 0) {
        assert(checkCommentsLength);
      }
    });
  });

  describe(`Check hashtags value`, () => {
    it(`should return no more ${Hashtag.QUANTITY} items`, () => {
      assert(entity.hashtags.length <= Hashtag.QUANTITY);
    });
    it(`each line starts with a '${Hashtag.HASH_SYMBOL}' character`, () => {
      assert(checkHashtagFirstSymbol);
    });
    it(`values must be unique`, () => {
      assert(checkUniqueValue(entity.hashtags));
    });
    it(`values must not contain spaces`, () => {
      assert.equal(checkHashtagsSpaces, false);
    });
    it(`the length of one word does not exceed ${Hashtag.MAX_LENGTH} characters`, () => {
      assert.equal(checkHashtagsLength, false);
    });
  });

  describe(`check data.date`, () => {
    it(`is number`, () => {
      assert.equal(typeof entity.date, `number`);
    });
    it(`is in correct range`, () => {
      const now = Date.now();
      assert.equal(entity.date <= now && entity.date >= now - DATE_INTERVAL_IN_MS, true);
    });
  });

});

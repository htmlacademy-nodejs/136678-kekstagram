'use strict';

const {author} = require(`../package.json`);

module.exports = {
  name: `--author`,
  description: `печатает имя автора;`,
  execute() {
    console.log(author);
  }
};

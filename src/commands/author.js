'use strict';

const colors = require(`colors`);
const {author} = require(`./package.json`);

module.exports = {
  name: `--author`,
  description: `печатает имя автора;`,
  execute() {
    console.log(colors.cyan(author));
  }
};

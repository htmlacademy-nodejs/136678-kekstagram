'use strict';

const colors = require(`colors`);
const {description} = require(`../package.json`);

module.exports = {
  name: `--description`,
  description: `печатает описание приложения;`,
  execute() {
    console.log(colors.magenta(description));
  }
};

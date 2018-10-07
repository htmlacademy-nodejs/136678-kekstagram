'use strict';

const {description} = require(`../package.json`);

module.exports = {
  name: `--description`,
  description: `печатает описание приложения;`,
  execute() {
    console.log(description);
  }
};

'use strict';

const {version} = require(`../package.json`);

module.exports = {
  name: `--version`,
  description: `печатает версию приложения;`,
  execute() {
    console.log(version);
  }
};

'use strict';

const {license} = require(`../package.json`);

module.exports = {
  name: `--license`,
  description: `печатает лицензию;`,
  execute() {
    console.log(license);
  }
};

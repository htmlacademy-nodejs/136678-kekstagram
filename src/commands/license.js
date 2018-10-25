'use strict';

const colors = require(`colors`);
const {license} = require(`./package.json`);

module.exports = {
  name: `--license`,
  description: `печатает лицензию;`,
  execute() {
    console.log(colors.blue(license));
  }
};

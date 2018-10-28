'use strict';

const colors = require(`colors`);

const {version} = require(`../../package.json`);

module.exports = {
  name: `--version`,
  description: `печатает версию приложения;`,
  execute() {
    const projectVersion = version.split(`.`);
    const MAJOR = colors.red(projectVersion[0]);
    const MINOR = colors.green(projectVersion[1]);
    const PATCH = colors.blue(projectVersion[2]);
    console.log(`${MAJOR}.${MINOR}.${PATCH}`);
  }
};

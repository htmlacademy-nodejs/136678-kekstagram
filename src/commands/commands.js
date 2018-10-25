'use strict';

const versionCommand = require(`./src/commands/version`);
const authorCommand = require(`./src/commands/author`);
const licenseCommand = require(`./src/commands/license`);
const descriptionCommand = require(`./src/commands/description`);

module.exports = {
  [versionCommand.name]: versionCommand,
  [authorCommand.name]: authorCommand,
  [licenseCommand.name]: licenseCommand,
  [descriptionCommand.name]: descriptionCommand,
};

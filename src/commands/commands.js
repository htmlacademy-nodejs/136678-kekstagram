'use strict';

const versionCommand = require(`./version`);
const authorCommand = require(`./author`);
const licenseCommand = require(`./license`);
const descriptionCommand = require(`./description`);
const serverCommand = require(`./server`);

module.exports = {
  [versionCommand.name]: versionCommand,
  [authorCommand.name]: authorCommand,
  [licenseCommand.name]: licenseCommand,
  [descriptionCommand.name]: descriptionCommand,
  [serverCommand.name]: serverCommand,
};

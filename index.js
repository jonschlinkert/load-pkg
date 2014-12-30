'use strict';

var pkg = {};

try {
  pkg = require(require('cwd')('package.json'));
} catch (err) {}

module.exports = pkg;
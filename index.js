/*!
 * load-pkg <https://github.com/jonschlinkert/load-pkg>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var fs = require('fs');
var cwd = require('cwd');
var pkg = {};

try {
  var fp = cwd('package.json');
  pkg = JSON.parse(fs.readFileSync(fp, 'utf8'));
} catch (err) {}

module.exports = pkg;

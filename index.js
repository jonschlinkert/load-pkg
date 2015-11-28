/*!
 * load-pkg <https://github.com/jonschlinkert/load-pkg>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var fs = require('fs');
var findPkg = require('find-pkg');

module.exports = function loadPkg(dir) {
  try {
    var filepath = findPkg(dir);
    var str = fs.readFileSync(filepath, 'utf8');
    return JSON.parse(str);
  } catch (err) {}
  return null;
};

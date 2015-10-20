/*!
 * load-pkg <https://github.com/jonschlinkert/load-pkg>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var fs = require('fs');
var path = require('path');
var cwd = require('cwd');

module.exports = function loadPkg(fp) {
  try {
    fp = fp || process.cwd();
    if (/package\.json$/.test(fp)) {
      // allow `cwd` to ensure the path is correct
      // based on the user's actual cwd
      fp = path.dirname(fp);
    }
    var filepath = cwd(path.join(fp, 'package.json'));
    var str = fs.readFileSync(filepath, 'utf8');
    return JSON.parse(str);
  } catch (err) {}
  return null;
};

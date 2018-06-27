/*!
 * load-pkg <https://github.com/jonschlinkert/load-pkg>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

const fs = require('fs');
const path = require('path');
const util = require('util');
const find = require('find-pkg');

module.exports = (...args) => {
  let cwd = args.find(arg => typeof arg === 'string');
  let options = args.find(arg => arg && typeof arg === 'object') || {};
  let callback = args.find(arg => typeof arg === 'function');

  if (!cwd) cwd = options.cwd || process.cwd();
  if (path.basename(cwd) === 'package.json') {
    cwd = path.dirname(cwd);
  }

  const promise = load(cwd, options);
  if (typeof callback === 'function') {
    promise.then(pkg => callback(null, pkg)).catch(callback);
    return;
  }
  return promise;
};

async function load(cwd, options) {
  const read = util.promisify(fs.readFile);
  const pkgPath = await find(cwd, options);
  if (pkgPath) {
    const buffer = await read(pkgPath);
    return JSON.parse(buffer);
  }
}

module.exports.sync = function(...args) {
  let cwd = args.find(arg => typeof arg === 'string');
  let options = args.find(arg => arg && typeof arg === 'object') || {};

  if (!cwd) cwd = options.cwd || process.cwd();
  if (path.basename(cwd) === 'package.json') {
    cwd = path.dirname(cwd);
  }

  let pkgPath = find.sync(cwd, options);
  if (pkgPath) {
    return JSON.parse(fs.readFileSync(pkgPath));
  }
};

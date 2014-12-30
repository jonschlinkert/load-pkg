'use strict';
var assert = require('assert');
var pkg = require('./');


it('should load the package.json for this project', function () {
  assert.equal(pkg.name, 'load-pkg');
  assert.equal(pkg.license.type, 'MIT');
});
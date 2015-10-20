'use strict';

require('mocha');
var assert = require('assert');
var loadPkg = require('./');

it('should load the package.json for this project', function () {
  var pkg = loadPkg();
  assert.equal(pkg.name, 'load-pkg');
  assert.equal(pkg.license, 'MIT');
});

it('should load the package.json from the specified directory', function () {
  var pkg = loadPkg('fixtures');
  assert.equal(pkg.name, 'abc');
});

it('should load the package.json from the specified filepath', function () {
  var pkg = loadPkg('fixtures/package.json');
  assert.equal(pkg.name, 'abc');
});

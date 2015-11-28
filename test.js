'use strict';

require('mocha');
var assert = require('assert');
var loadPkg = require('./');

describe('async', function() {
  it('should load the package.json for this project', function(cb) {
    loadPkg(function(err, pkg) {
      if (err) return cb(err);
      assert.equal(pkg.name, 'load-pkg');
      assert.equal(pkg.license, 'MIT');
      cb()
    });
  });

  it('should load the package.json from the specified directory', function(cb) {
    loadPkg('fixtures', function(err, pkg) {
      if (err) return cb(err);
      assert.equal(pkg.name, 'abc');
      cb()
    });
  });

  it('should load the package.json from the specified filepath', function(cb) {
    loadPkg('fixtures/package.json', function(err, pkg) {
      if (err) return cb(err);
      assert.equal(pkg.name, 'abc');
      cb()
    });
  });
});

describe('sync', function() {
  it('should load the package.json for this project', function() {
    var pkg = loadPkg.sync();
    assert.equal(pkg.name, 'load-pkg');
    assert.equal(pkg.license, 'MIT');
  });

  it('should load the package.json from the specified directory', function() {
    var pkg = loadPkg.sync('fixtures');
    assert.equal(pkg.name, 'abc');
  });

  it('should load the package.json from the specified filepath', function() {
    var pkg = loadPkg.sync('fixtures/package.json');
    assert.equal(pkg.name, 'abc');
  });
});

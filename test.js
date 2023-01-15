'use strict';

require('mocha');
const assert = require('assert');
const load = require('./');

describe('promise', () => {
  it('should load the package.json in the cwd', () => {
    return load()
      .then(pkg => {
        assert.equal(pkg.name, 'load-pkg');
        assert.equal(pkg.license, 'MIT');
      });
  });

  it('should load the package.json from the specified directory', () => {
    return load('fixtures')
      .then(pkg => {
        assert.equal(pkg.name, 'abc');
      });
  });

  it('should load the package.json from the specified directory', () => {
    return load('fixtures/sub')
      .then(pkg => {
        assert.equal(pkg.name, 'abc');
      });
  });

  it('should load the package.json from the specified package.json', () => {
    return load('fixtures/package.json')
      .then(pkg => {
        assert.equal(pkg.name, 'abc');
      });
  });
});

describe('callback', () => {
  it('should load the package.json in the cwd', cb => {
    load((err, pkg) => {
      if (err) return cb(err);
      assert.equal(pkg.name, 'load-pkg');
      assert.equal(pkg.license, 'MIT');
      cb()
    });
  });

  it('should load the package.json from the specified directory', cb => {
    load('fixtures', function(err, pkg) {
      if (err) return cb(err);
      assert.equal(pkg.name, 'abc');
      cb()
    });
  });

  it('should load the package.json from the specified filepath', cb => {
    load('fixtures/package.json', function(err, pkg) {
      if (err) return cb(err);
      assert.equal(pkg.name, 'abc');
      cb()
    });
  });
});

describe('sync', () => {
  it('should load the package.json for this project', () => {
    const pkg = load.sync();
    assert.equal(pkg.name, 'load-pkg');
    assert.equal(pkg.license, 'MIT');
  });

  it('should load the package.json from the specified directory', () => {
    const pkg = load.sync('fixtures');
    assert.equal(pkg.name, 'abc');
  });

  it('should load the package.json from the specified subpath', () => {
    const pkg = load.sync('fixtures/sub');
    assert.equal(pkg.name, 'abc');
  });

  it('should load the package.json from options.cwd', () => {
    const pkg = load.sync({ cwd: 'fixtures' });
    assert.equal(pkg.name, 'abc');
  });

  it('should load the package.json from the specified filepath', () => {
    const pkg = load.sync('fixtures/package.json');
    assert.equal(pkg.name, 'abc');
  });
});

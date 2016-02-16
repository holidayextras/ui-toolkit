var test = require('tap').test;
var mod = require('../');

test('module string to object', function (t) {
  t.deepEqual(mod('nodemon'), { name: 'nodemon', version: '*' }, 'supports versionless');
  t.deepEqual(mod('nodemon@latest'), { name: 'nodemon', version: '*' }, 'switches latest to *');
  t.deepEqual(mod('nodemon@'), { name: 'nodemon', version: '*' }, 'always give a version');
  t.deepEqual(mod('nodemon@1'), { name: 'nodemon', version: '1' }, 'with version');
  t.deepEqual(mod('nodemon@1.0'), { name: 'nodemon', version: '1.0' }, 'with version');
  t.deepEqual(mod('nodemon@1.0.0'), { name: 'nodemon', version: '1.0.0' }, 'with version');

  t.deepEqual(mod('@remy/snyk-module'), { name: '@remy/snyk-module', version: '*' }, 'private packages');
  t.deepEqual(mod('jsbin/jsbin'), { name: 'jsbin', version: 'jsbin/jsbin' }, 'short github works');

  t.deepEqual(mod('jsbin', 1), { name: 'jsbin', version: '1' }, 'version arg works');
  t.deepEqual(mod('@remy/jsbin', 1), { name: '@remy/jsbin', version: '1' }, 'scoped with version arg works');

  [
    'a@1',
    'url',
  ].forEach(function (str) {
    t.ok(mod(str), str + ' parsed ok');
  });

  var urls = [
    'https://github.com/remy/undefsafe',
    'https://github.com/remy/undefsafe/',
    'https://github.com/remy/undefsafe.git',
    'git@github.com:remy/undefsafe.git',
    'git@bitbucket.org:remy/undefsafe.git',
    'remy/undefsafe',
  ];

  var expect = {
    name: 'undefsafe',
    version: 'remy/undefsafe',
  };

  urls.forEach(function (url) {
    t.deepEqual(mod(url), expect, 'short github works');
  });

  t.deepEqual(mod(urls[0] + '#123'), { name: 'undefsafe', version: 'remy/undefsafe#123'}, 'add hash correctly');

  t.throws(function () {
    mod('/');
  }, /invalid package name/, 'catch invalid package name');

  t.throws(function () {
    mod('  *');
  }, /invalid package name/, 'catch invalid package name');


  t.throws(function () {
    mod();
  }, /requires string/, 'requires args');


  // usernames on git urls aren't supported (unsure if this is 100% right tho)
  t.throws(function () {
    mod('grunt-sails-linker@git://github.com/Zolmeister/grunt-sails-linker.git');
  }, /not supported: external module/, 'external not supported');

  // privately hosted git repo not supported
  t.throws(function () {
    mod('ikt@git+http://ikt.pm2.io/ikt.git#master');
  }, /not supported: external module/, 'external not supported');

  t.end();
});

test('encoding', function (t) {
  t.equal(mod.encode('snyk'), 'snyk', 'vanilla strings unaffected');
  t.equal(mod.encode('@snyk/config'), '@snyk%2Fconfig', 'slash is escaped');
  t.end();
});
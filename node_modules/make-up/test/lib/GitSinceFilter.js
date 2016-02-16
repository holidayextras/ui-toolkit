'use strict';

var chai = require('chai');
var sinonChai = require('sinon-chai');
var dirtyChai = require('dirty-chai');
var sinon = require('sinon');
chai.should();
chai.use(dirtyChai);
chai.use(sinonChai);
global.sinon = sinon;

var GitSinceFilter = require('../../lib/GitSinceFilter');

describe('GitSinceFilter', function() {

  describe('_fileIsNewer()', function() {

    context('when the file is found in the github list', function() {

      it('returns true', function() {
        GitSinceFilter._fileIsNewer(['imaginary.js'], 'imaginary.js').should.be.true();
      });

    });

    context('when the file is not found in the github list', function() {

      it('returns false', function() {
        GitSinceFilter._fileIsNewer(['real.js'], 'imaginary.js').should.be.false();
      });

    });

  });

  describe('_addRootLevelSlashes()', function() {

    context('with a root level file', function() {

      it('adds slashes', function() {
        GitSinceFilter._addRootLevelSlashes('imaginary.js').should.equal('./imaginary.js');
      });

    });

    context('with a nested file', function() {

      it('does not change it', function() {
        GitSinceFilter._addRootLevelSlashes('friend/imaginary.js').should.equal('friend/imaginary.js');
      });

    });

  });

  describe('_formatDate()', function() {

    context('with a date string format only Date() knows about', function() {

      it('formats the string in an ISO format', function() {
        GitSinceFilter._formatDate('Tue Jun 09 2015 14:49:57 GMT+0100 (BST)').should.match(/\d{4}-\d{2}-\d{2}T\d{2}\:\d{2}\:\d{2}\+\d{2}\:\d{2}/);
      });

    });

  });

});

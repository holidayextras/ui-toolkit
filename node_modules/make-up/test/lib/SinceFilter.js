'use strict';

var chai = require('chai');
var sinonChai = require('sinon-chai');
var dirtyChai = require('dirty-chai');
var sinon = require('sinon');
chai.should();
chai.use(dirtyChai);
chai.use(sinonChai);
global.sinon = sinon;

var fs = require('fs');
var SinceFilter = require('../../lib/SinceFilter');

describe('SinceFilter', function() {

  describe('_fileIsNewer()', function() {

    var stub;
    var since;

    before(function() {
      stub = sinon.stub(fs, 'statSync');
      stub.returns({
        mtime: 'Mon, 10 Oct 2011 23:24:11 GMT'
      });
    });

    after(function() {
      stub.restore();
    });

    context('when the file is newer', function() {

      before(function() {
        since = new Date('Sun, 09 Oct 2011 23:24:11 GMT').getTime();
      });

      it('returns true', function() {
        SinceFilter._fileIsNewer(since, 'imaginary.js').should.be.true();
      });

    });

    context('when the file is older', function() {

      before(function() {
        since = new Date('Tue, 11 Oct 2011 23:24:11 GMT').getTime();
      });

      it('returns false', function() {
        SinceFilter._fileIsNewer(since, 'imaginary.js').should.be.false();
      });

    });

  });

});

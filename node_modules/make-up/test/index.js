'use strict';

var chai = require('chai');
var sinonChai = require('sinon-chai');
var dirtyChai = require('dirty-chai');
var sinon = require('sinon');
chai.should();
chai.use(dirtyChai);
chai.use(sinonChai);
global.sinon = sinon;

var path = require('path');
var streams = require('memory-streams');
var makeup = require('../index');

describe('makeup', function() {

  it('should return an object', function() {
    makeup.should.be.an('object');
  });


  describe('path()', function() {

    it('is a function', function() {
      makeup.path.should.be.a('function');
    });

    it('returns a path to the requested configuration file', function() {
      var expectedPath = path.resolve(__dirname, '../') + '/configs/configReader';
      makeup.path('configReader').should.equal(expectedPath);
    });

  });

  describe('check()', function() {

    var options;
    var integrationStub;
    var testCallback;

    before(function() {
      options = {};
      testCallback = sinon.stub();

      var testStream = new streams.WritableStream();
      testStream.write('TEST');

      integrationStub = sinon.stub(makeup, '_runIntegration');
      integrationStub.yields(null, testStream);

      makeup.checkIntegrations = [{
        run: sinon.stub()
      },
      {
        run: sinon.stub()
      }];
      makeup.check(options, testCallback);
    });

    after(function() {
      integrationStub.restore();
    });

    it('runs the given integrations', function() {
      integrationStub.should.have.been.calledTwice();
    });

    it('runs the provided callback', function() {
      testCallback.should.have.been.called();
    });

    it('joins any integration output', function() {
      testCallback.args[0][1].should.equal('TESTTEST');
    });
  });

  describe('_runIntegration()', function() {

    var item;
    var testCallback;

    before(function() {
      item = {
        run: sinon.stub()
      };
      testCallback = sinon.stub();
      makeup._runIntegration({}, item, testCallback);
    });

    it('runs the given integration', function() {
      item.run.should.have.been.called();
    });
  });

});

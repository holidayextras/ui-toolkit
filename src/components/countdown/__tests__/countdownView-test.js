var React = require('react');
var sinon = require('sinon');
var CountdownComponent = require('../code/views/countdownView.jsx');
var CountdownManager = require('../code/lib/countdownManager');
var TestUtils = React.addons.TestUtils;


describe('CountdownComponent', function() {
  var clock = null;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    sinon.stub(CountdownManager.prototype, 'time').returns(123);
  });
  afterEach(function() {
    clock.restore();
    CountdownManager.prototype.time.restore();
  });

  it('should render a countdown timer', function() {
    var countdown = TestUtils.renderIntoDocument(
      <CountdownComponent until="2016-07-27" />
    );
    assert.equal(countdown.props.until, '2016-07-27');
  });

  it('check the countdown mnagaer states time is set correctly', function() {
    var date = "2016-07-27";
    var countdown = TestUtils.renderIntoDocument(
      <CountdownComponent until={date} />
    );
    assert.equal(countdown.state.time, 123);
  });

});

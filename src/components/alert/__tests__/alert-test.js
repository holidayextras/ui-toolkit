var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var assert = require('chai').assert;
var AlertComponent = require('../code/views/alertView.jsx');

describe('AlertComponent', function() {

  it('should render an Alert', function() {
    var alert = TestUtils.renderIntoDocument(
      <AlertComponent>I am content</AlertComponent>
    );

    var renderedAlert = TestUtils.findRenderedDOMComponentWithClass(alert, 'component-alert');
    assert.equal(renderedAlert.getDOMNode().textContent, 'I am content');

  });

  it('should render a success alert', function() {
    var successAlert = TestUtils.renderIntoDocument(
      <AlertComponent purpose="success">You have been successful</AlertComponent>
    );

    var renderedAlert = TestUtils.findRenderedDOMComponentWithClass(successAlert, 'success');
    assert.isDefined(renderedAlert);

  });

  it('should render a danger alert', function() {
    var dangerAlert = TestUtils.renderIntoDocument(
      <AlertComponent purpose="danger">This is dangerous</AlertComponent>
    );

    var renderedAlert = TestUtils.findRenderedDOMComponentWithClass(dangerAlert, 'danger');
    assert.isDefined(renderedAlert);

  });

  it('should render a info alert', function() {
    var infoAlert = TestUtils.renderIntoDocument(
      <AlertComponent purpose="info">This is information</AlertComponent>
    );

    var renderedAlert = TestUtils.findRenderedDOMComponentWithClass(infoAlert, 'info');
    assert.isDefined(renderedAlert);

  });

  it('should render a warning alert', function() {
    var warningAlert = TestUtils.renderIntoDocument(
      <AlertComponent purpose="warning">You have been warned</AlertComponent>
    );

    var renderedAlert = TestUtils.findRenderedDOMComponentWithClass(warningAlert, 'warning');
    assert.isDefined(renderedAlert);

  });

  it('should render a large default alert', function() {
    var largeAlert = TestUtils.renderIntoDocument(
      <AlertComponent size="large">I am large</AlertComponent>
    );

    var renderedAlert = TestUtils.findRenderedDOMComponentWithClass(largeAlert, 'large');
    assert.isDefined(renderedAlert);

  });

  it('should render an alert with a header', function() {
    var alert = TestUtils.renderIntoDocument(
      <AlertComponent title="Header" />
    );

    var renderedAlert = TestUtils.findRenderedDOMComponentWithClass(alert, 'component-alert');
    assert.equal(renderedAlert.getDOMNode().textContent, 'Header');

  });

});

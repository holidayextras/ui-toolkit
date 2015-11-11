'use strict';
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var assert = require('chai').assert;
var ButtonView = require('../../src/components/button/button.jsx');

describe('ButtonComponent', function() {

  it('should render button', function() {
    var button = TestUtils.renderIntoDocument(
      <ButtonView>Book Now</ButtonView>
    );

    var renderedButton = TestUtils.findRenderedDOMComponentWithClass(button, 'component-button');
    assert.equal(renderedButton.textContent, 'Book Now');

  });

  it('should render a primary button', function() {
    var primaryButton = TestUtils.renderIntoDocument(
      <ButtonView purpose="primary">Book Now</ButtonView>
    );

    var renderedButton = TestUtils.findRenderedDOMComponentWithClass(primaryButton, 'primary');
    assert.isDefined(renderedButton);

  });

  it('should render a default button', function() {
    var defaultButton = TestUtils.renderIntoDocument(
      <ButtonView size="default">Book Now</ButtonView>
    );

    var renderedButton = TestUtils.findRenderedDOMComponentWithClass(defaultButton, 'default');
    assert.isDefined(renderedButton);

  });

  it('should render a medium button', function() {
    var mediumButton = TestUtils.renderIntoDocument(
      <ButtonView size="medium">Book Now</ButtonView>
    );

    var renderedButton = TestUtils.findRenderedDOMComponentWithClass(mediumButton, 'medium');
    assert.isDefined(renderedButton);

  });

  it('should render a large button', function() {
    var largeButton = TestUtils.renderIntoDocument(
      <ButtonView size="large">Book Now</ButtonView>
    );

    var renderedButton = TestUtils.findRenderedDOMComponentWithClass(largeButton, 'large');
    assert.isDefined(renderedButton);

  });

  it('should render a small secondary button', function() {
    var smallSecondaryButton = TestUtils.renderIntoDocument(
      <ButtonView size="small" purpose="secondary">Book Now</ButtonView>
    );

    var renderedButton = TestUtils.findRenderedDOMComponentWithClass(smallSecondaryButton, 'small secondary');
    assert.isDefined(renderedButton);

  });

  it('should render as an anchor if href is present', function() {
    var anchor = TestUtils.renderIntoDocument(
      <ButtonView href="http://www.ui-toolkit.com">Go to Toolkit</ButtonView>
    );

    var renderedButton = TestUtils.findRenderedDOMComponentWithTag(anchor, 'a');
    assert.isDefined(renderedButton);
  });

});

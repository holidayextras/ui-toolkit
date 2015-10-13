/** @jsx React.DOM */
var React = require('react');
var StepperComponent = require('../code/views/stepperComponentView.jsx.jsx');

describe('StepperComponent', function() {

  it('is an element', function() {
    assert.ok(TestUtils.isElement(<StepperComponent />));
  });

});
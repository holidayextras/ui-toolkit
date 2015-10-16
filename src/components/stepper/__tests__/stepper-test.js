'use strict';

var assert = require('chai').assert;
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var sinon = require('sinon');
var Stepper = require('../code/views/stepperView.jsx');

describe('Stepper', function() {

  var props;

  beforeEach(function() {

    props = {
      value: 2,
      onChange: sinon.spy(),
      minValue: 1,
      maxValue: 3
    };

  });

  describe('render', function() {

    it('should render Stepper', function() {
      var renderOutput = TestUtils.renderIntoDocument(<Stepper {... props} />);
      var renderedStepper = TestUtils.findRenderedDOMComponentWithClass(renderOutput, 'component-stepper');
      assert.isDefined(renderedStepper);
    });

    it('should not disable the increment button when the value is less than the maxValue', function() {
      var renderOutput = TestUtils.renderIntoDocument(<Stepper {... props} />);
      var button = TestUtils.scryRenderedDOMComponentsWithClass(renderOutput, 'component-button')[1];
      assert(!button.getDOMNode().disabled);
    });

    it('should disable the increment button when it hits the maxValue', function() {
      props.value = 3;
      var renderOutput = TestUtils.renderIntoDocument(<Stepper {... props} />);
      var button = TestUtils.scryRenderedDOMComponentsWithClass(renderOutput, 'component-button')[1];
      assert(button.getDOMNode().disabled);
    });

    it('should not disable the decrement button when the value is more than the minValue', function() {
      props.value = 2;
      var renderOutput = TestUtils.renderIntoDocument(<Stepper {... props} />);
      var button = TestUtils.scryRenderedDOMComponentsWithClass(renderOutput, 'component-button')[0];
      assert(!button.getDOMNode().disabled);
    });

    it('should disable the decrement button when it hits the minValue', function() {
      props.value = 1;
      var renderOutput = TestUtils.renderIntoDocument(<Stepper {... props} />);
      var button = TestUtils.scryRenderedDOMComponentsWithClass(renderOutput, 'component-button')[0];
      assert(button.getDOMNode().disabled);
    });

  });

  describe('increment', function() {
    it('should call onChange with a incremented value', function() {
      var renderOutput = TestUtils.renderIntoDocument(<Stepper {... props} />);
      renderOutput.increment();
      assert(props.onChange.calledWith(3));
    });

    it('should not call onChange if we can not increment', function() {
      props.value = 3;
      var renderOutput = TestUtils.renderIntoDocument(<Stepper {... props} />);
      renderOutput.increment();
      assert(props.onChange.notCalled);
    });

  });

  describe('decrement', function() {

    it('should call onChange with a decremented value', function() {
      var renderOutput = TestUtils.renderIntoDocument(<Stepper {... props} />);
      renderOutput.decrement();
      assert(props.onChange.calledWith(1));
    });

    it('should not call onChange if we can not decrement', function() {
      props.value = 1;
      var renderOutput = TestUtils.renderIntoDocument(<Stepper {... props} />);
      renderOutput.decrement();
      assert(props.onChange.notCalled);
    });

  });

  describe('canIncrement', function() {

    it('should return true when value is under maxValue', function() {
      var renderOutput = TestUtils.renderIntoDocument(<Stepper {... props} />);
      assert(renderOutput.canIncrement());
    });

    it('should return true when no maxValue is set', function() {
      props.maxValue = undefined;
      var renderOutput = TestUtils.renderIntoDocument(<Stepper {... props} />);
      assert(renderOutput.canIncrement());
    });


    it('should return false when value is over maxValue', function() {
      props.value = 4;
      var renderOutput = TestUtils.renderIntoDocument(<Stepper {... props} />);
      assert(!renderOutput.canIncrement());
    });

    it('should return false when value is equal to maxValue', function() {
      props.value = 3;
      var renderOutput = TestUtils.renderIntoDocument(<Stepper {... props} />);
      assert(!renderOutput.canIncrement());
    });

  });

  describe('canDecrement', function() {

    it('should return true when value is greater than minValue', function() {
      var renderOutput = TestUtils.renderIntoDocument(<Stepper {... props} />);
      assert(renderOutput.canIncrement());
    });

    it('should return true when no minValue is set', function() {
      props.minValue = undefined;
      var renderOutput = TestUtils.renderIntoDocument(<Stepper {... props} />);
      assert(renderOutput.canDecrement());
    });


    it('should return false when value is less than minValue', function() {
      props.value = 0;
      var renderOutput = TestUtils.renderIntoDocument(<Stepper {... props} />);
      assert(!renderOutput.canDecrement());
    });

    it('should return false when value is equal to minValue', function() {
      props.value = 1;
      var renderOutput = TestUtils.renderIntoDocument(<Stepper {... props} />);
      assert(!renderOutput.canDecrement());
    });

  });

});

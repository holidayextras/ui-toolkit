'use strict';
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var assert = require('chai').assert;
var sinon = require('sinon');
var SelectView = require('../../src/components/select/select.jsx');

describe('SelectComponent', function() {
  it('should render select with label', function() {
    var select = TestUtils.renderIntoDocument(
      <SelectView label="test" />
    );

    var renderedSelect = TestUtils.findRenderedDOMComponentWithClass(select, 'component-select-label');
    assert.isDefined(renderedSelect);

  });

  it('should have default ID', function() {
    var select = TestUtils.renderIntoDocument(
      <SelectView />
    );

    var renderedSelect = TestUtils.findRenderedDOMComponentWithClass(select, 'component-select-field');
    assert.equal(renderedSelect.id, 'component-select');
  });

  it('should have default name', function() {
    var select = TestUtils.renderIntoDocument(
      <SelectView />
    );

    var renderedSelect = TestUtils.findRenderedDOMComponentWithClass(select, 'component-select-field');
    assert.equal(renderedSelect.name, 'component-select');
  });


  it('should have custom ID', function() {
    var select = TestUtils.renderIntoDocument(
      <SelectView id="test-select-id" />
    );

    var renderedSelect = TestUtils.findRenderedDOMComponentWithClass(select, 'component-select-field');
    assert.equal(renderedSelect.id, 'test-select-id');
  });

  it('should have custom name', function() {
    var select = TestUtils.renderIntoDocument(
      <SelectView name="test-select-name" />
    );

    var renderedSelect = TestUtils.findRenderedDOMComponentWithClass(select, 'component-select-field');
    assert.equal(renderedSelect.name, 'test-select-name');
  });

  it('should have data attributes', function() {
    var data = {
      attr: 'test'
    };
    var select = TestUtils.renderIntoDocument(
      <SelectView data={data} />
    );

    var renderedSelect = TestUtils.findRenderedDOMComponentWithClass(select, 'component-select-field');
    assert.equal(renderedSelect.getAttribute('data-attr'), 'test');
  });

  it('should call handleChange prop when value changes', function() {
    var handleChange = sinon.spy();
    var select = TestUtils.renderIntoDocument(
      <SelectView label="test" handleChange={handleChange}>
        <option>Country</option>
        <option>Germany</option>
        <option>Spain</option>
      </SelectView>
    );

    var renderedSelect = TestUtils.findRenderedDOMComponentWithClass(select, 'component-select-field');
    TestUtils.Simulate.change(renderedSelect, { option: 'Germany' });
    assert.ok(handleChange.calledOnce);
  });


  describe('getDefaultProps', function() {
    var elem = TestUtils.renderIntoDocument(
      <SelectView />
    );
    it('sets id to "component-select"', function() {
      assert.equal(elem.props.id, 'component-select');
    });

    it('sets name to "component-select"', function() {
      assert.equal(elem.props.name, 'component-select');
    });
  });

});

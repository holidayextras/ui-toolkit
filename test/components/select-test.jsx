'use strict'

const React = require('react')
const TestUtils = require('react-addons-test-utils')
const assert = require('chai').assert
const sinon = require('sinon')
const SelectView = require('../../src/components/select/select.jsx')

describe('SelectComponent', function () {
  it('should render select with label', function () {
    const select = TestUtils.renderIntoDocument(
      <SelectView label='test' />
    )

    const renderedSelect = TestUtils.findRenderedDOMComponentWithClass(select, 'component-select-label')
    assert.isDefined(renderedSelect)
  })

  it('should have default ID', function () {
    const select = TestUtils.renderIntoDocument(
      <SelectView />
    )

    const renderedSelect = TestUtils.findRenderedDOMComponentWithClass(select, 'component-select-field')
    assert.equal(renderedSelect.id, 'component-select')
  })

  it('should have default name', function () {
    const select = TestUtils.renderIntoDocument(
      <SelectView />
    )

    const renderedSelect = TestUtils.findRenderedDOMComponentWithClass(select, 'component-select-field')
    assert.equal(renderedSelect.name, 'component-select')
  })

  it('should have custom ID', function () {
    const select = TestUtils.renderIntoDocument(
      <SelectView id='test-select-id' />
    )

    const renderedSelect = TestUtils.findRenderedDOMComponentWithClass(select, 'component-select-field')
    assert.equal(renderedSelect.id, 'test-select-id')
  })

  it('should have custom name', function () {
    const select = TestUtils.renderIntoDocument(
      <SelectView name='test-select-name' />
    )

    const renderedSelect = TestUtils.findRenderedDOMComponentWithClass(select, 'component-select-field')
    assert.equal(renderedSelect.name, 'test-select-name')
  })

  it('should have data attributes', function () {
    const data = {
      attr: 'test'
    }
    const select = TestUtils.renderIntoDocument(
      <SelectView data={data} />
    )

    const renderedSelect = TestUtils.findRenderedDOMComponentWithClass(select, 'component-select-field')
    assert.equal(renderedSelect.getAttribute('data-attr'), 'test')
  })

  it('should call handleChange prop when value changes', function () {
    const handleChange = sinon.spy()
    const select = TestUtils.renderIntoDocument(
      <SelectView label='test' handleChange={handleChange}>
        <option>Country</option>
        <option>Germany</option>
        <option>Spain</option>
      </SelectView>
    )

    const renderedSelect = TestUtils.findRenderedDOMComponentWithClass(select, 'component-select-field')
    TestUtils.Simulate.change(renderedSelect, { option: 'Germany' })
    assert.ok(handleChange.calledOnce)
  })

  describe('getDefaultProps', function () {
    const elem = TestUtils.renderIntoDocument(
      <SelectView />
    )
    it('sets id to "component-select"', function () {
      assert.equal(elem.props.id, 'component-select')
    })

    it('sets name to "component-select"', function () {
      assert.equal(elem.props.name, 'component-select')
    })
  })
})

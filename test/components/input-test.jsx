'use strict'
const React = require('react')
const TestUtils = require('react-addons-test-utils')
const assert = require('chai').assert
const sinon = require('sinon')
const InputView = require('../../src/components/input/input.jsx')

describe('InputComponent', function () {
  it('should render text input', function () {
    const input = TestUtils.renderIntoDocument(
      <InputView type='text' />
    )

    const renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'component-input-field')
    assert.equal(renderedInput.type, 'text')
  })

  it('should render tel input', function () {
    const input = TestUtils.renderIntoDocument(
      <InputView type='tel' />
    )

    const renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'component-input-field')
    assert.equal(renderedInput.type, 'tel')
  })

  it('should render email input', function () {
    const input = TestUtils.renderIntoDocument(
      <InputView type='email' />
    )

    const renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'component-input-field')
    assert.equal(renderedInput.type, 'email')
  })

  it('should render number input', function () {
    const input = TestUtils.renderIntoDocument(
      <InputView type='number' />
    )

    const renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'component-input-field')
    assert.equal(renderedInput.type, 'number')
  })

  it('should call handleChange prop when value changes', function () {
    const handleChange = sinon.spy()
    const input = TestUtils.renderIntoDocument(
      <InputView type='text' label='Full Name' handleChange={handleChange} />
    )

    const renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'component-input-field')

    TestUtils.Simulate.change(renderedInput, { target: { value: 'changed value' } })
    assert.ok(handleChange.calledOnce)
  })

  it('should render input with label', function () {
    const input = TestUtils.renderIntoDocument(
      <InputView type='text' label='Full Name' />
    )

    const renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'component-input-label')
    assert.isDefined(renderedInput)
  })

  it('should render input as disabled', function () {
    const input = TestUtils.renderIntoDocument(
      <InputView type='text' disabled />
    )

    const renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'component-input-field')
    assert.equal(renderedInput.getAttribute('disabled'), '')
  })

  it('should render input as readonly', function () {
    const input = TestUtils.renderIntoDocument(
      <InputView type='text' readOnly />
    )

    const renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'component-input-field')
    assert.equal(renderedInput.getAttribute('readonly'), '')
  })

  it('should not have default value', function () {
    const input = TestUtils.renderIntoDocument(
      <InputView />
    )

    const renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'component-input-field')
    assert.equal(renderedInput.value, '')
  })

  it('should have default ID', function () {
    const input = TestUtils.renderIntoDocument(
      <InputView />
    )

    const renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'component-input-field')
    assert.equal(renderedInput.id, 'component-input')
  })

  it('should have default name', function () {
    const input = TestUtils.renderIntoDocument(
      <InputView />
    )

    const renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'component-input-field')
    assert.equal(renderedInput.name, 'component-input')
  })

  it('should have custom value', function () {
    const input = TestUtils.renderIntoDocument(
      <InputView >Jane Doe</InputView>
    )

    const renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'component-input-field')
    assert.equal(renderedInput.value, 'Jane Doe')
  })

  it('should have custom placeholder', function () {
    const input = TestUtils.renderIntoDocument(
      <InputView placeholder='Enter Name' />
    )

    const renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'component-input-field')
    assert.equal(renderedInput.getAttribute('placeholder'), 'Enter Name')
  })

  it('should have custom ID', function () {
    const input = TestUtils.renderIntoDocument(
      <InputView id='test-input-id' />
    )

    const renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'component-input-field')
    assert.equal(renderedInput.id, 'test-input-id')
  })

  it('should have custom name', function () {
    const input = TestUtils.renderIntoDocument(
      <InputView name='test-input-name' />
    )

    const renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'component-input-field')
    assert.equal(renderedInput.name, 'test-input-name')
  })

  it('should have data attributes', function () {
    const data = {
      attr: 'test'
    }
    const input = TestUtils.renderIntoDocument(
      <InputView data={data} />
    )

    const renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'component-input-field')
    assert.equal(renderedInput.getAttribute('data-attr'), 'test')
  })

  describe('getDefaultProps', function () {
    const elem = TestUtils.renderIntoDocument(
      <InputView />
    )

    it('sets type to text', function () {
      assert.equal(elem.props.type, 'text')
    })

    it('sets disabled to false', function () {
      assert.isFalse(elem.props.disabled)
    })

    it('sets readOnly to false', function () {
      assert.isFalse(elem.props.readOnly)
    })

    it('sets required to false', function () {
      assert.isFalse(elem.props.required)
    })

    it('sets errorMessage to "Invalid Input"', function () {
      assert.equal(elem.props.errorMessage, 'Invalid Input')
    })

    it('sets id to "component-input"', function () {
      assert.equal(elem.props.id, 'component-input')
    })

    it('sets name to "component-input"', function () {
      assert.equal(elem.props.name, 'component-input')
    })

    it('sets placeHolder to empty string', function () {
      assert.equal(elem.props.placeHolder, '')
    })
  })

  describe('validate', function () {
    it('sets state correctly when no validator is set', function () {
      const elem = TestUtils.renderIntoDocument(
        <InputView />
      )

      elem.setState = sinon.spy()
      elem.validate('foo')

      assert.isTrue(elem.setState.calledWith({
        valid: true,
        error: null
      }))
    })

    it('sets error message when validator fails', function () {
      const elem = TestUtils.renderIntoDocument(
        <InputView validator={/[a-b]+/} errorMessage='Boom' />
      )

      elem.setState = sinon.spy()
      elem.validate('1111')
      assert.isTrue(elem.setState.calledWith({
        valid: false,
        error: 'Boom'
      }))
    })
  })
})

describe('InputComponent Error with Default Message', function () {
  let input
  let renderedInput
  const emailValidator = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i

  beforeEach(function () {
    input = TestUtils.renderIntoDocument(
      <InputView type='text' validator={emailValidator} />
    )

    renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'component-input-field')
  })

  it('should change the value to be invalid and throw error state with null message', function () {
    TestUtils.Simulate.change(renderedInput, { target: { value: 'invalid @ email . #$%' } })
    setTimeout(function () {
      assert.equal(input.state.error, 'Invalid Input')
    }, 1000)
  })
})

describe('InputComponent Error with Custom Message', function () {
  let input
  let renderedInput
  const emailValidator = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
  const emailErrorMessage = 'Invalid Email'

  beforeEach(function () {
    input = TestUtils.renderIntoDocument(
      <InputView type='text' validator={emailValidator} errorMessage={emailErrorMessage} />
    )
    renderedInput = TestUtils.findRenderedDOMComponentWithClass(input, 'component-input-field')
  })

  it('should change the value to be invalid and throw error state with custom message', function () {
    TestUtils.Simulate.change(renderedInput, { target: { value: 'invalid @ email . #$%' } })
    setTimeout(function () {
      assert.equal(input.state.error, 'Invalid Input')
    }, 1000)
  })
})

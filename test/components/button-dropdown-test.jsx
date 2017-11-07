'use strict'
var React = require('react')
var TestUtils = require('react-addons-test-utils')
var expect = require('chai')
.use(require('dirty-chai')).expect
var ButtonDropdown = require('../../src/components/button-dropdown/button-dropdown.jsx')

describe('ButtonDropdown', function () {
  var props
  beforeEach(function () {
    props = {
      position: ''
    }
  })

  it('should be a valid react component', function () {
    expect(TestUtils.isElement(<ButtonDropdown />)).to.be.true()
  })

  it('should be a valid dom component', function () {
    var buttonDropdown = TestUtils.renderIntoDocument(<ButtonDropdown />)
    var renderedButtonComponent = TestUtils.findRenderedDOMComponentWithClass(buttonDropdown, 'component-button-dropdown')
    expect(TestUtils.isDOMComponent(renderedButtonComponent)).to.be.true()
  })

  it('should be able to have position of top passed to the component', function () {
    props.position = 'top'
    var buttonDropdown = TestUtils.renderIntoDocument(<ButtonDropdown {...props} />)
    expect(TestUtils.findRenderedDOMComponentWithClass(buttonDropdown, 'top')).to.be.ok()
  })

  it('should be able to have position of bottom passed to the component', function () {
    props.position = 'bottom'
    var buttonDropdown = TestUtils.renderIntoDocument(<ButtonDropdown {...props} />)
    expect(TestUtils.findRenderedDOMComponentWithClass(buttonDropdown, 'bottom')).to.be.ok()
  })

  it('should be able to not pass any position as it isnt required', function () {
    var buttonDropdown = TestUtils.renderIntoDocument(<ButtonDropdown />)
    expect(TestUtils.findRenderedDOMComponentWithClass(buttonDropdown, 'component-button-dropdown')).to.be.ok()
  })

  context('when rendering into document', function () {
    it('should be able to take a number of children', function () {
      var buttonDropdown = TestUtils.renderIntoDocument(
        <ButtonDropdown>
          <div>
            <button />
          </div>
        </ButtonDropdown>
      )
      expect(buttonDropdown).to.be.ok()
    })
  })
})

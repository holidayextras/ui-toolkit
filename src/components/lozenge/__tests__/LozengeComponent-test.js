/** @jsx React.DOM */

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var Lozenge = require('../code/views/LozengeComponentView.jsx');

describe('Lozenge', function() {
  it('is an element', function(){
    assert.ok(TestUtils.isElement(<Lozenge />));
  });

  it('renders a span', function(){
    var instance = TestUtils.renderIntoDocument(<Lozenge tip="foo">bar</Lozenge>);
    assert.ok(TestUtils.findRenderedDOMComponentWithTag(instance, 'span'));
  });

  it('renders the children', function(){
    var rendered = TestUtils.renderIntoDocument(<Lozenge tip="foo">bar</Lozenge>);
    assert.equal(TestUtils.findRenderedDOMComponentWithTag(rendered, 'span').getDOMNode().innerHTML, 'bar');
  });

  describe('with tip', function(){
    beforeEach(function(){
      this.instance = TestUtils.renderIntoDocument(<Lozenge tip="foo">bar</Lozenge>);
    });

    it('should include the has-tooltip class', function(){
      assert.ok(TestUtils.findRenderedDOMComponentWithClass(this.instance, 'has-tooltip'));
    });

    it('sets the tip as the title', function(){
      var el = TestUtils.findRenderedDOMComponentWithClass(this.instance, 'has-tooltip').getDOMNode();
      assert.equal(el.getAttribute('title'), 'foo');
    });
  });

  describe('without tip', function(){
    beforeEach(function(){
      this.instance = TestUtils.renderIntoDocument(<Lozenge>bar</Lozenge>);
    });

    it('should not include the has-tooltip class', function(){
      assert.equal(TestUtils.scryRenderedDOMComponentsWithClass(this.instance, 'has-tooltip').length, 0);
    });
  });

  describe('without purpose atttribute or purpose as an attribute', function(){
    beforeEach(function(){
      this.instance = TestUtils.renderIntoDocument(<Lozenge>foo</Lozenge>);
    });
    it('renders label-default class', function(){
      assert.ok(TestUtils.findRenderedDOMComponentWithClass(this.instance, 'label-default'));
    });
  });

  describe('with purpose attribute', function(){
    describe('primary', function(){
      beforeEach(function(){
        this.instance = TestUtils.renderIntoDocument(<Lozenge purpose="primary">foo</Lozenge>);
      });

      it('renders label-primary class', function(){
        assert.ok(TestUtils.findRenderedDOMComponentWithClass(this.instance, 'label-primary'));
      });
    });

    describe('success', function(){
      beforeEach(function(){
        this.instance = TestUtils.renderIntoDocument(<Lozenge purpose="success">foo</Lozenge>);
      });

      it('renders label-success class', function(){
        assert.ok(TestUtils.findRenderedDOMComponentWithClass(this.instance, 'label-success'));
      });
    });

    describe('info', function(){
      beforeEach(function(){
        this.instance = TestUtils.renderIntoDocument(<Lozenge purpose="info">foo</Lozenge>);
      });

      it('renders label-info class', function(){
        assert.ok(TestUtils.findRenderedDOMComponentWithClass(this.instance, 'label-info'));
      });
    });

    describe('warning', function(){
      beforeEach(function(){
        this.instance = TestUtils.renderIntoDocument(<Lozenge purpose="warning">foo</Lozenge>);
      });

      it('renders label-warning class', function(){
        assert.ok(TestUtils.findRenderedDOMComponentWithClass(this.instance, 'label-warning'));
      });
    });

    describe('danger', function(){
      beforeEach(function(){
        this.instance = TestUtils.renderIntoDocument(<Lozenge purpose="danger">foo</Lozenge>);
      });

      it('renders label-danger class', function(){
        assert.ok(TestUtils.findRenderedDOMComponentWithClass(this.instance, 'label-danger'));
      });
    });
  });
});

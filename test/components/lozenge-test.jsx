'use strict';
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var assert = require('chai').assert;
var Lozenge = require('../../src/components/lozenge/lozenge.jsx');

describe('Lozenge', function() {
  it('is an element', function() {
    assert.ok(TestUtils.isElement(<Lozenge />));
  });

  it('renders a span', function() {
    var instance = TestUtils.renderIntoDocument(<Lozenge tip="foo">bar</Lozenge>);
    assert.ok(TestUtils.findRenderedDOMComponentWithTag(instance, 'span'));
  });

  it('renders the children', function() {
    var rendered = TestUtils.renderIntoDocument(<Lozenge tip="foo">bar</Lozenge>);
    assert.equal(TestUtils.findRenderedDOMComponentWithTag(rendered, 'span').innerHTML, 'bar');
  });

  describe('with tip', function() {
    beforeEach(function() {
      this.instance = TestUtils.renderIntoDocument(<Lozenge tip="foo">bar</Lozenge>);
    });

    it('sets the tip as the title', function() {
      var el = TestUtils.findRenderedDOMComponentWithClass(this.instance, 'component-lozenge');
      assert.equal(el.getAttribute('title'), 'foo');
    });
  });

  describe('without tip', function() {
    beforeEach(function() {
      this.instance = TestUtils.renderIntoDocument(<Lozenge>bar</Lozenge>);
    });

    it('should not set a tip as the title', function() {
      var el = TestUtils.findRenderedDOMComponentWithClass(this.instance, 'component-lozenge');
      assert.equal(el.getAttribute('title'), null);
    });
  });

  describe('with purpose attribute', function() {
    describe('primary', function() {
      beforeEach(function() {
        this.instance = TestUtils.renderIntoDocument(<Lozenge purpose="primary">foo</Lozenge>);
      });

      it('renders primary class', function() {
        assert.ok(TestUtils.findRenderedDOMComponentWithClass(this.instance, 'primary'));
      });
    });

    describe('success', function() {
      beforeEach(function() {
        this.instance = TestUtils.renderIntoDocument(<Lozenge purpose="success">foo</Lozenge>);
      });

      it('renders success class', function() {
        assert.ok(TestUtils.findRenderedDOMComponentWithClass(this.instance, 'success'));
      });
    });

    describe('info', function() {
      beforeEach(function() {
        this.instance = TestUtils.renderIntoDocument(<Lozenge purpose="info">foo</Lozenge>);
      });

      it('renders info class', function() {
        assert.ok(TestUtils.findRenderedDOMComponentWithClass(this.instance, 'info'));
      });
    });

    describe('warning', function() {
      beforeEach(function() {
        this.instance = TestUtils.renderIntoDocument(<Lozenge purpose="warning">foo</Lozenge>);
      });

      it('renders warning class', function() {
        assert.ok(TestUtils.findRenderedDOMComponentWithClass(this.instance, 'warning'));
      });
    });

    describe('danger', function() {
      beforeEach(function() {
        this.instance = TestUtils.renderIntoDocument(<Lozenge purpose="danger">foo</Lozenge>);
      });

      it('renders danger class', function() {
        assert.ok(TestUtils.findRenderedDOMComponentWithClass(this.instance, 'danger'));
      });
    });
  });
  describe('with size attribute', function() {
    describe('small', function() {
      beforeEach(function() {
        this.instance = TestUtils.renderIntoDocument(<Lozenge size="small">foo</Lozenge>);
      });

      it('renders small class', function() {
        assert.ok(TestUtils.findRenderedDOMComponentWithClass(this.instance, 'small'));
      });
    });
    describe('medium', function() {
      beforeEach(function() {
        this.instance = TestUtils.renderIntoDocument(<Lozenge size="medium">foo</Lozenge>);
      });

      it('renders medium class', function() {
        assert.ok(TestUtils.findRenderedDOMComponentWithClass(this.instance, 'medium'));
      });
    });
    describe('large', function() {
      beforeEach(function() {
        this.instance = TestUtils.renderIntoDocument(<Lozenge size="large">foo</Lozenge>);
      });

      it('renders large class', function() {
        assert.ok(TestUtils.findRenderedDOMComponentWithClass(this.instance, 'large'));
      });
    });
    describe('extra-large', function() {
      beforeEach(function() {
        this.instance = TestUtils.renderIntoDocument(<Lozenge size="extra-large">foo</Lozenge>);
      });

      it('renders extra-large class', function() {
        assert.ok(TestUtils.findRenderedDOMComponentWithClass(this.instance, 'extra-large'));
      });
    });
    describe('block', function() {
      beforeEach(function() {
        this.instance = TestUtils.renderIntoDocument(<Lozenge size="block">foo</Lozenge>);
      });

      it('renders block class', function() {
        assert.ok(TestUtils.findRenderedDOMComponentWithClass(this.instance, 'block'));
      });
    });
  });
});

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var assert = require('chai').assert;
var IconListItem = require('../code/iconListItem.jsx');

describe('IconListItemComponent', function() {

  it('is an element', function() {
    assert.ok(TestUtils.isElement(<IconListItem icon="check" />));
  });

  it('should render a list item with a class of component-icon-list-item', function() {
    var iconListItemInstance = TestUtils.renderIntoDocument(
      <IconListItem icon="check" />
    );

    var renderedIconListItem = TestUtils.findRenderedDOMComponentWithClass(iconListItemInstance, 'component-icon-list-item');
    assert.equal(renderedIconListItem.getDOMNode().nodeName, 'LI');
  });

  it('should render an i tag with the correct font awesome classes', function() {
    var iconListItemInstance = TestUtils.renderIntoDocument(
      <IconListItem icon="check" />
    );

    var renderedIconListItem = TestUtils.findRenderedDOMComponentWithClass(iconListItemInstance, 'component-icon-list-item');
    assert.equal(renderedIconListItem.getDOMNode().firstChild.nodeName, 'I');
    assert.equal(renderedIconListItem.getDOMNode().firstChild.className, 'fa fa-fw fa-check');
  });

  it('render text content passed in as child', function() {
    var iconListItemInstance = TestUtils.renderIntoDocument(
      <IconListItem icon="check">this is a check</IconListItem>
    );

    var renderedIconListItem = TestUtils.findRenderedDOMComponentWithClass(iconListItemInstance, 'component-icon-list-item');
    assert.equal(renderedIconListItem.getDOMNode().textContent, 'this is a check');
  });

  it('renders html tags as children', function() {
    var iconListItemInstance = TestUtils.renderIntoDocument(
      <IconListItem icon="check"><strong>this is a strong check</strong></IconListItem>
    );

    var renderedIconListItem = TestUtils.findRenderedDOMComponentWithClass(iconListItemInstance, 'component-icon-list-item');
    assert.equal(renderedIconListItem.getDOMNode().lastChild.nodeName, 'STRONG');
    assert.equal(renderedIconListItem.getDOMNode().lastChild.textContent, 'this is a strong check');
  });

  describe('with purpose attribute', function(){
    describe('primary', function(){
      beforeEach(function(){
        this.instance = TestUtils.renderIntoDocument(<IconListItem icon="check" purpose="primary">foo</IconListItem>);
      });

      it('renders primary class', function(){
        assert.ok(TestUtils.findRenderedDOMComponentWithClass(this.instance, 'primary'));
      });
    });

    describe('success', function(){
      beforeEach(function(){
        this.instance = TestUtils.renderIntoDocument(<IconListItem icon="check" purpose="success">foo</IconListItem>);
      });

      it('renders success class', function(){
        assert.ok(TestUtils.findRenderedDOMComponentWithClass(this.instance, 'success'));
      });
    });

    describe('info', function(){
      beforeEach(function(){
        this.instance = TestUtils.renderIntoDocument(<IconListItem icon="check" purpose="info">foo</IconListItem>);
      });

      it('renders info class', function(){
        assert.ok(TestUtils.findRenderedDOMComponentWithClass(this.instance, 'info'));
      });
    });

    describe('warning', function(){
      beforeEach(function(){
        this.instance = TestUtils.renderIntoDocument(<IconListItem icon="check" purpose="warning">foo</IconListItem>);
      });

      it('renders warning class', function(){
        assert.ok(TestUtils.findRenderedDOMComponentWithClass(this.instance, 'warning'));
      });
    });

    describe('danger', function(){
      beforeEach(function(){
        this.instance = TestUtils.renderIntoDocument(<IconListItem icon="check" purpose="danger">foo</IconListItem>);
      });

      it('renders danger class', function(){
        assert.ok(TestUtils.findRenderedDOMComponentWithClass(this.instance, 'danger'));
      });
    });
  });

});

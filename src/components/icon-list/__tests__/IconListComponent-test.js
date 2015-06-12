/** @jsx React.DOM */

var IconList = require('../code/views/iconListComponentView.jsx');
var IconListItem = require('../../icon-list-item/code/views/iconListItemComponentView.jsx');

describe('iconListComponent ', function() {

  it('is an element', function() {
    assert.ok(TestUtils.isElement(<IconList />));
  });

  it('should render an unordered list', function() {
    var iconListInstance = TestUtils.renderIntoDocument(
      <IconList>
        <IconListItem icon="check">Positive</IconListItem>
        <IconListItem icon="close">Negative</IconListItem>
      </IconList>
    );

    var renderedIconList = TestUtils.findRenderedDOMComponentWithClass(ul, 'component-icon-list');
    assert.equal(renderedIconList.getDOMNode().nodeName, )

    // assert.equal(React.findDOMNode(instance).nodeName, 'DIV');
    // assert.ok(React.findDOMNode(instance).className.match(/\bbtn-group\b/));
    // var renderedButton = TestUtils.findRenderedDOMComponentWithClass(button, 'component-button');
    // assert.equal(renderedButton.getDOMNode().textContent, 'Book Now');

  });



  // it('should render a primary button', function() {
  //   var primaryButton = TestUtils.renderIntoDocument(
  //     <ButtonView purpose="primary">Book Now</ButtonView>
  //   );

  //   var renderedButton = TestUtils.findRenderedDOMComponentWithClass(primaryButton, 'primary');
  //   assert.isDefined(renderedButton);

  // });

  // it('should render a default button', function() {
  //   var defaultButton = TestUtils.renderIntoDocument(
  //     <ButtonView size="default">Book Now</ButtonView>
  //   );

  //   var renderedButton = TestUtils.findRenderedDOMComponentWithClass(defaultButton, 'default');
  //   assert.isDefined(renderedButton);

  // });

  // it('should render a medium button', function() {
  //   var mediumButton = TestUtils.renderIntoDocument(
  //     <ButtonView size="medium">Book Now</ButtonView>
  //   );

  //   var renderedButton = TestUtils.findRenderedDOMComponentWithClass(mediumButton, 'medium');
  //   assert.isDefined(renderedButton);

  // });

  // it('should render a large button', function() {
  //   var largeButton = TestUtils.renderIntoDocument(
  //     <ButtonView size="large">Book Now</ButtonView>
  //   );

  //   var renderedButton = TestUtils.findRenderedDOMComponentWithClass(largeButton, 'large');
  //   assert.isDefined(renderedButton);

  // });

  // it('should render a small secondary button', function() {
  //   var smallSecondaryButton = TestUtils.renderIntoDocument(
  //     <ButtonView size="small" purpose="secondary">Book Now</ButtonView>
  //   );

  //   var renderedButton = TestUtils.findRenderedDOMComponentWithClass(smallSecondaryButton, 'small secondary');
  //   assert.isDefined(renderedButton);

  // });

  // it('should render as an anchor if href is present', function() {
  //   var anchor = TestUtils.renderIntoDocument(
  //     <ButtonView href='http://www.ui-toolkit.com'>Go to Toolkit</ButtonView>
  //   );

  //   var renderedButton = TestUtils.findRenderedDOMComponentWithTag(anchor, 'a');
  //   assert.isDefined(renderedButton);

});

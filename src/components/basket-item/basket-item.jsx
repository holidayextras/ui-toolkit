'use strict';
var React = require('react');
var ReactIntl = require('react-intl');
var Anchor = require('../anchor');

module.exports = React.createClass({
  propTypes: {
    price: React.PropTypes.number,
    title: React.PropTypes.node,
    toggleDescription: React.PropTypes.bool,
    handleRemove: React.PropTypes.func,
    children: React.PropTypes.node
  },
  contextTypes: {
    locale: React.PropTypes.string,
    messages: React.PropTypes.object,
    formats: React.PropTypes.object
  },
  getInitialState: function() {
    return {
      descriptionVisibility: !this.props.toggleDescription
    };
  },
  getDefaultProps: function() {
    return {
      title: null,
      price: null,
      handleRemove: null,
      toggleDescription: false
    };
  },
  toggleDescriptionVisibility: function() {
    this.setState({ descriptionVisibility: !this.state.descriptionVisibility });
  },
  titleNode: function() {
    if (this.props.title === null) return null;
    // Only wrap the title if it's not an element already.
    if (this.props.toggleDescription && !React.isValidElement(this.props.title)) return (<Anchor handleClick={this.toggleDescriptionVisibility}>{this.props.title}</Anchor>);
    return this.props.title;
  },
  priceNode: function() {
    if (this.props.price === null) return null;
    if (this.props.price === 0) {
      return 'Free';
    }
    // TODO: Revisit this when this issue has been completed: https://github.com/yahoo/react-intl/issues/215
    // need to pass in `format="price"` and remove `style` and `currency` props.
    return <ReactIntl.FormattedNumber value={this.props.price} style="currency" currency="GBP" />;
  },
  removeNode: function() {
    if (this.props.handleRemove === null) return null;
    return (
      <Anchor handleClick={this.props.handleRemove}>Remove</Anchor>
    );
  },
  render: function() {
    var titleNode = this.titleNode();
    var descriptionStyle = {
      'display': (this.state.descriptionVisibility || titleNode === null) ? 'block' : 'none'
    };
    var intlDefaults = {
      locale: 'en',
      messages: {
        'free': 'FREE',
        'remove': 'remove'
      },
      formats: {
        number: {
          price: {
            style: 'currency',
            currency: 'GBP',
            minimumFractionDigits: 2
          }
        }
      }
    };
    return (
      <ReactIntl.IntlProvider defaultLocale={intlDefaults.locale} defaultFormats={intlDefaults.formats}>
        <div className="component-basket-item">
          <div className="component-basket-row">
            <div className="component-basket-item-title">{titleNode}</div>
            <div className="component-basket-item-total">{this.priceNode()}</div>
          </div>
          <div className="component-basket-row">
            <div className="component-basket-item-description" style={descriptionStyle}>{this.props.children}</div>
            <div className="component-basket-item-remove">{this.removeNode()}</div>
          </div>
        </div>
      </ReactIntl.IntlProvider>
    );
  }
});

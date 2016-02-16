'use strict';

var React = require('react');
var Button = require('../button');

module.exports = React.createClass({
  displayName: 'exports',

  propTypes: {
    buttonText: React.PropTypes.string.isRequired,
    options: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    data: React.PropTypes.object,
    handleClick: React.PropTypes.func.isRequired,
    purpose: React.PropTypes.oneOf(['default', 'primary', ' secondary', 'success', 'warning', 'danger', 'info']),
    size: React.PropTypes.oneOf(['default', 'small', 'medium', 'large', 'extra-large'])
  },

  getDefaultProps: function getDefaultProps() {
    return {
      purpose: 'success',
      size: 'large'
    };
  },

  buildListOptions: function buildListOptions() {
    var self = this;
    var options = this.props.options.map(function (option, index) {
      return React.createElement(
        'li',
        { key: index },
        option
      );
    });

    return React.createElement(
      'ul',
      { className: 'dropdown-menu interstitial-dropdown', handleClick: self.props.handleClick },
      options
    );
  },

  render: function render() {
    var self = this;

    var buttonDataAttrs = {
      toggle: 'dropdown'
    };

    return React.createElement(
      'div',
      { className: 'grouped-buttons' },
      React.createElement(
        Button,
        { id: 'left-button',
          data: self.props.data,
          handleClick: this.props.handleClick,
          purpose: this.props.purpose,
          size: this.props.size },
        this.props.buttonText
      ),
      React.createElement(
        Button,
        { id: 'right-button',
          data: buttonDataAttrs,
          purpose: this.props.purpose,
          size: this.props.size,
          className: 'dropdown-toggle',
          'data-toggle': 'dropdown' },
        React.createElement('i', { className: 'fa fa-caret-up' })
      ),
      this.buildListOptions()
    );
  }
});

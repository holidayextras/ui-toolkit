'use strict';
var React = require('react');
var Image = require('../image');

module.exports = React.createClass({
  displayName: 'exports',

  propTypes: {
    children: React.PropTypes.any,
    image: React.PropTypes.object.isRequired,
    title: React.PropTypes.string
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: 'component-tile' },
      React.createElement(Image, this.props.image),
      React.createElement(
        'div',
        { className: 'component-tile-block' },
        this.props.title ? React.createElement(
          'h4',
          null,
          this.props.title
        ) : null,
        this.props.children
      )
    );
  }
});

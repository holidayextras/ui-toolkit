'use strict';
var React = require('react');

module.exports = React.createClass({

  propTypes: {
    children: React.PropTypes.any
  },

  render: function() {
    return (
      <ul className="component-icon-list">
        {this.props.children}
      </ul>
    );
  }
});

'use strict';
var React = require('react');

module.exports = React.createClass({

  propTypes: {
    children: React.PropTypes.any
  },

  render: function() {
    return (
      <dt className="component-list-term">
        {this.props.children}
      </dt>
    );
  }
});

'use strict';
var React = require('react');
var Image = require('../image');

module.exports = React.createClass({
  propTypes: {
    children: React.PropTypes.any,
    image: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <div className="component-tile">
        <Image {...this.props.image} />
        <div className="component-tile-block">
          {this.props.children}
        </div>
      </div>
    );
  }
});

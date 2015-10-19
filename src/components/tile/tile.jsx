'use strict';
var React = require('react');
var Image = require('../image');

module.exports = React.createClass({
  propTypes: {
    children: React.PropTypes.any,
    image: React.PropTypes.object.isRequired,
    title: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <div className="component-tile">
        <Image {...this.props.image} />
        <div className="caption">
          <h4>{this.props.title}</h4>
          {this.props.children}
        </div>
      </div>
    );
  }
});

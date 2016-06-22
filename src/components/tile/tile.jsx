'use strict';
var React = require('react');
var Image = require('../image');
var _ = {
  omit: require('lodash/object/omit')
};

module.exports = React.createClass({
  propTypes: {
    children: React.PropTypes.any,
    image: React.PropTypes.object.isRequired
  },

  render: function() {
    var { image, children } = this.props;
    var tileProps = _.omit(this.props, 'image', 'children');

    return (
      <div className="component-tile" {...tileProps}>
        <Image {...image} />
        <div className="component-tile-block">
          {children}
        </div>
      </div>
    );
  }
});

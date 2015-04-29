var React = require('react');

module.exports = React.createClass({
  propTypes: {
    image: React.PropTypes.object.isRequired,
    title: React.PropTypes.string.isRequired
  },
  
  defaultProps: function() {
    return {};
  },

  render: function() {
    return require('../templates/ui_component_product_tile_component_template.jsx')(this.props);
  }
});
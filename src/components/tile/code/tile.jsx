var React = require('react');
var ImageComponent = require('../../image');

module.exports = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    image: React.PropTypes.object.isRequired,
    title: React.PropTypes.string.isRequired
  },

  defaultProps: function() {
    return {};
  },

  render: function() {
    return (
      <div className="component-tile">
        <ImageComponent {...this.props.image} />
        <div className="caption">
          <h4>{this.props.title}</h4>
          {this.props.children}
        </div>
      </div>
    );
  }
});

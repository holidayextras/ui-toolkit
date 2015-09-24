var React = require('react');
var DataAttributesMixin = require('react-data-attributes-mixin');

module.exports = React.createClass({

  mixins: [DataAttributesMixin],

  propTypes: {
    src: React.PropTypes.string.isRequired,
    alt: React.PropTypes.string.isRequired,
    handleClick: React.PropTypes.func,
    href: React.PropTypes.string
  },

  render: function() {
    var dataAttributes = this.getDataAttributesFromProps();
    if(this.props.href) {
      return (
        <a className="component-image" href={this.props.href} onClick={this.props.handleClick} {...dataAttributes} >
          <img alt={this.props.alt} src={this.props.src} />
        </a>
      );
    }
    return (
      <img alt={this.props.alt} src={this.props.src} onClick={this.props.handleClick} className="component-image" {...dataAttributes} />
    );
  }
});

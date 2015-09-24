var React = require('react');
var classNames = require('classnames');
var getComponentClasses = require('../../../utils/getComponentClasses');

module.exports = React.createClass({

  propTypes: {
    author: React.PropTypes.string,
    children: React.PropTypes.node,
    cite: React.PropTypes.string,
    orientation: React.PropTypes.oneOf(['default', 'horizontal', 'vertical']),
    purpose: React.PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info']),
    role: React.PropTypes.string,
    size: React.PropTypes.oneOf(['default', 'small', 'medium', 'large', 'extra-large']),
    type: React.PropTypes.oneOf(['block', 'inline'])
  },

  render: function() {
    var propClasses = ['size', 'purpose', 'type'];
    var classes = getComponentClasses('component-quote', propClasses, this.props);
    if(this.props.type === 'inline') {
      return (
        <q className={classNames(classes)} cite={this.props.cite} itemScope itemType="http://schema.org/CreativeWork" itemProp="text">
          {this.props.children}
          {(this.props.cite) ? <meta itemProp="citation" content={this.props.cite} /> : null}
          <span itemProp="author" itemScope itemType="http://schema.org/Person">
            <meta itemProp="name" content={this.props.author} />
            <meta itemProp="jobTitle" content={this.props.role} />
          </span>
        </q>
      );
    }
    return (
        <blockquote className={classNames(classes)} itemScope itemType="http://schema.org/CreativeWork">
          <p itemProp="text">{this.props.children}</p>
          <footer itemProp="author" itemScope itemType="http://schema.org/Person">
            <span itemProp="name">{this.props.author}</span>
            <small itemProp="jobTitle">{this.props.role}</small>
            {(this.props.cite) ? <cite itemProp="citation">{this.props.cite}</cite> : null}
          </footer>
        </blockquote>
    );
  }
});


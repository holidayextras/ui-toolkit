'use strict';
var React = require('react');
var classNames = require('classnames');

module.exports = React.createClass({
  displayName: 'exports',

  propTypes: {
    children: React.PropTypes.any,
    cite: React.PropTypes.string,
    author: React.PropTypes.string,
    role: React.PropTypes.string,
    purpose: React.PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info']),
    size: React.PropTypes.oneOf(['default', 'small', 'medium', 'large', 'extra-large']),
    orientation: React.PropTypes.oneOf(['default', 'horizontal', 'vertical']),
    type: React.PropTypes.oneOf(['block', 'inline'])
  },

  render: function render() {
    var classes = classNames('component-quote', this.props.size, this.props.purpose, this.props.type);
    if (this.props.type === 'inline') {
      return React.createElement(
        'q',
        { className: classes, cite: this.props.cite, itemScope: true, itemType: 'http://schema.org/CreativeWork', itemProp: 'text' },
        this.props.children,
        this.props.cite ? React.createElement('meta', { itemProp: 'citation', content: this.props.cite }) : null,
        React.createElement(
          'span',
          { itemProp: 'author', itemScope: true, itemType: 'http://schema.org/Person' },
          React.createElement('meta', { itemProp: 'name', content: this.props.author }),
          React.createElement('meta', { itemProp: 'jobTitle', content: this.props.role })
        )
      );
    }
    return React.createElement(
      'blockquote',
      { className: classes, itemScope: true, itemType: 'http://schema.org/CreativeWork' },
      React.createElement(
        'p',
        { itemProp: 'text' },
        this.props.children
      ),
      React.createElement(
        'footer',
        { itemProp: 'author', itemScope: true, itemType: 'http://schema.org/Person' },
        React.createElement(
          'span',
          { itemProp: 'name' },
          this.props.author
        ),
        React.createElement(
          'small',
          { itemProp: 'jobTitle' },
          this.props.role
        ),
        this.props.cite ? React.createElement(
          'cite',
          { itemProp: 'citation' },
          this.props.cite
        ) : null
      )
    );
  }
});

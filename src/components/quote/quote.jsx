'use strict'

const React = require('react')
const classNames = require('classnames')
const PropTypes = require('prop-types')

module.exports = React.createClass({

  propTypes: {
    children: PropTypes.any,
    cite: PropTypes.string,
    author: PropTypes.string,
    role: PropTypes.string,
    purpose: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info']),
    size: PropTypes.oneOf(['default', 'small', 'medium', 'large', 'extra-large']),
    orientation: PropTypes.oneOf(['default', 'horizontal', 'vertical']),
    type: PropTypes.oneOf(['block', 'inline'])
  },

  render: function () {
    const classes = classNames('component-quote', this.props.size, this.props.purpose, this.props.type)
    if (this.props.type === 'inline') {
      return (
        <q className={classes} cite={this.props.cite} itemScope itemType='http://schema.org/CreativeWork' itemProp='text'>
          {this.props.children}
          {(this.props.cite) ? <meta itemProp='citation' content={this.props.cite} /> : null}
          <span itemProp='author' itemScope itemType='http://schema.org/Person'>
            <meta itemProp='name' content={this.props.author} />
            <meta itemProp='jobTitle' content={this.props.role} />
          </span>
        </q>
      )
    }
    return (
      <blockquote className={classes} itemScope itemType='http://schema.org/CreativeWork'>
        <p itemProp='text'>{this.props.children}</p>
        <footer itemProp='author' itemScope itemType='http://schema.org/Person'>
          <span itemProp='name'>{this.props.author}</span>
          <small itemProp='jobTitle'>{this.props.role}</small>
          {(this.props.cite) ? <cite itemProp='citation'>{this.props.cite}</cite> : null}
        </footer>
      </blockquote>
    )
  }
})

'use strict'

const React = require('react')
const classNames = require('classnames')
const PropTypes = require('prop-types')

const Quote = ({
  children,
  cite,
  author,
  role,
  purpose,
  size,
  orientation,
  type
}) => {
  const classes = classNames('component-quote', size, purpose, type)
  if (type === 'inline') {
    return (
      <q className={classes} cite={cite} itemScope itemType='http://schema.org/CreativeWork' itemProp='text'>
        {children}
        {(cite) ? <meta itemProp='citation' content={cite} /> : null}
        <span itemProp='author' itemScope itemType='http://schema.org/Person'>
          <meta itemProp='name' content={author} />
          <meta itemProp='jobTitle' content={role} />
        </span>
      </q>
    )
  }
  return (
    <blockquote className={classes} itemScope itemType='http://schema.org/CreativeWork'>
      <p itemProp='text'>{children}</p>
      <footer itemProp='author' itemScope itemType='http://schema.org/Person'>
        <span itemProp='name'>{author}</span>
        <small itemProp='jobTitle'>{role}</small>
        {(cite) ? <cite itemProp='citation'>{cite}</cite> : null}
      </footer>
    </blockquote>
  )
}

Quote.propTypes = {
  children: PropTypes.any,
  cite: PropTypes.string,
  author: PropTypes.string,
  role: PropTypes.string,
  purpose: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info']),
  size: PropTypes.oneOf(['default', 'small', 'medium', 'large', 'extra-large']),
  orientation: PropTypes.oneOf(['default', 'horizontal', 'vertical']),
  type: PropTypes.oneOf(['block', 'inline'])
}

module.exports = Quote

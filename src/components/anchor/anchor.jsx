'use strict'

const React = require('react')
const PropTypes = require('prop-types')
const { flatten } = require('../helpers')

const Anchor = ({
  children,
  data,
  title,
  role,
  href,
  handleClick,
  target
}) => {
  if (!children) {
    // TODO - return null
    // React < 15 doesn't allow returning null from functional components.
    // See: https://github.com/facebook/react/issues/5355
    return <noscript />
  }
  const dataAttributes = flatten(data)
  return (
    <a
      className='component-anchor'
      {...dataAttributes}
      title={title}
      role={role}
      href={href}
      onClick={handleClick}
      target={target}
    >
      {children}
    </a>
  )
}

Anchor.propTypes = {
  handleClick: PropTypes.func,
  children: PropTypes.node,
  data: PropTypes.object,
  href: PropTypes.string,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  title: PropTypes.string,
  role: PropTypes.string
}

Anchor.defaultProps = {
  href: '#',
  role: 'link'
}

module.exports = Anchor

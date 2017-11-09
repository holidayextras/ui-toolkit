'use strict'

const React = require('react')
const PropTypes = require('prop-types')

const List = ({
  children,
  type
}) => {
  if (type === 'ordered') {
    return (
      <ol className='component-ordered-list'>
        {children}
      </ol>
    )
  } else if (type === 'icon') {
    return (
      <ul className='component-icon-list'>
        {children}
      </ul>
    )
  } else if (type === 'description') {
    return (
      <dl className='component-description-list'>
        {children}
      </dl>
    )
  }
  return (
    <ul className='component-unordered-list'>
      {children}
    </ul>
  )
}

List.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(['ordered', 'unordered', 'description', 'icon'])
}

module.exports = List

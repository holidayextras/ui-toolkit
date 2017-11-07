'use strict'

const React = require('react')
const PropTypes = require('prop-types')

const ListDescription = ({
  children
}) => (
  <dd className='component-list-description'>
    {children}
  </dd>
)

ListDescription.propTypes = {
  children: PropTypes.any
}

module.exports = ListDescription

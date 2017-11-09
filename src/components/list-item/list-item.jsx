'use strict'

const React = require('react')
const PropTypes = require('prop-types')

const ListItem = ({
  children
}) => (
  <li className='component-list-item'>
    {children}
  </li>
)

ListItem.propTypes = {
  children: PropTypes.any
}

module.exports = ListItem

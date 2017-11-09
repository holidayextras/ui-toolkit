'use strict'

const React = require('react')
const PropTypes = require('prop-types')

const ListTerm = ({
  children
}) => (
  <dt className='component-list-term'>
    {children}
  </dt>
)

ListTerm.propTypes = {
  children: PropTypes.any
}

module.exports = ListTerm

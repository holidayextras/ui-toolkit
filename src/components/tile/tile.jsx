'use strict'

const React = require('react')
const PropTypes = require('prop-types')
const Image = require('../image')
const _ = {
  omit: require('lodash/omit')
}

const Tile = (props) => {
  const { children, image } = props
  const tileProps = _.omit(props, 'image', 'children')
  return (
    <div className='component-tile' {...tileProps}>
      <Image {...image} />
      <div className='component-tile-block'>
        {children}
      </div>
    </div>
  )
}

Tile.propTypes = {
  children: PropTypes.any,
  image: PropTypes.object.isRequired
}

module.exports = Tile

'use strict'

const React = require('react')
const Image = require('../image')
const _ = {
  omit: require('lodash/omit')
}

module.exports = React.createClass({
  propTypes: {
    children: React.PropTypes.any,
    image: React.PropTypes.object.isRequired
  },

  render: function () {
    const { image, children } = this.props
    const tileProps = _.omit(this.props, 'image', 'children')

    return (
      <div className='component-tile' {...tileProps}>
        <Image {...image} />
        <div className='component-tile-block'>
          {children}
        </div>
      </div>
    )
  }
})

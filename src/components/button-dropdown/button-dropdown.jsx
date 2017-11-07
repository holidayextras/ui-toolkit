'use strict'

var React = require('react')
var classNames = require('classnames')

module.exports = React.createClass({

  propTypes: {
    children: React.PropTypes.any,
    position: React.PropTypes.oneOf(['top', 'bottom'])
  },

  render: function () {
    var classes = classNames('component-button-dropdown', this.props.position)
    return (
      <div className={classes}>
        {this.props.children}
      </div>
    )
  }
})

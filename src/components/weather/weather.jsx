'use strict'

const React = require('react')
const PropTypes = require('prop-types')
const moment = require('moment')

module.exports = React.createClass({

  propTypes: {
    format: PropTypes.string,
    type: PropTypes.oneOf(['cloudy', 'fog', 'hail', 'heavy-rain', 'heavy-snow', 'light-rain', 'light-snow', 'night-clear', 'night-partly-cloudy', 'partly-cloudy', 'storm', 'sunny', 'windy']).isRequired,
    temperature: PropTypes.number,
    date: PropTypes.string,
    unit: PropTypes.oneOf(['C', 'F', 'K', 'R'])
  },

  render: function () {
    const expectedFormat = ['YYYY-MM-DD', 'YYYY-MM-DDTHH:mm']
    const displayFormat = this.props.format || 'ddd'
    const date = this.props.date
    let unit = this.props.unit
    if (this.props.unit !== 'K') {
      unit = '°' + unit
    }

    const unitNames = {
      'C': 'Degrees Celsuis',
      'F': 'Degrees Farenheit',
      'K': 'Kelvin',
      'R': 'Degrees Rankine'
    }
    const unitName = unitNames[this.props.unit]

    return (
      <div className='component-weather'>
        <div className={this.props.type}><span>{this.props.type}</span></div>
        {(this.props.temperature || this.props.temperature === 0) ? <div>{this.props.temperature}<abbr title={unitName}>{unit}</abbr></div> : null}
        {(this.props.date) ? <div>{moment(date, expectedFormat, true).format(displayFormat)}</div> : null}
      </div>
    )
  }
})

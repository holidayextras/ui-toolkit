'use strict'

const React = require('react')
const PropTypes = require('prop-types')
const moment = require('moment')

const EXPECTED_FORMAT = ['YYYY-MM-DD', 'YYYY-MM-DDTHH:mm']
const UNIT_NAMES = {
  'C': 'Degrees Celsuis',
  'F': 'Degrees Farenheit',
  'K': 'Kelvin',
  'R': 'Degrees Rankine'
}

const Weather = ({
  format,
  type,
  temperature,
  date,
  unit
}) => {
  const displayFormat = format || 'ddd'
  const displayUnit = unit === 'K' ? unit : '°' + unit
  const unitName = UNIT_NAMES[unit]

  return (
    <div className='component-weather'>
      <div className={type}><span>{type}</span></div>
      {(temperature || temperature === 0)
        ? <div>{temperature}<abbr title={unitName}>{displayUnit}</abbr></div>
        : null
      }
      {date
        ? <div>{moment(date, EXPECTED_FORMAT, true).format(displayFormat)}</div>
        : null
      }
    </div>
  )
}

Weather.propTypes = {
  format: PropTypes.string,
  type: PropTypes.oneOf(['cloudy', 'fog', 'hail', 'heavy-rain', 'heavy-snow', 'light-rain', 'light-snow', 'night-clear', 'night-partly-cloudy', 'partly-cloudy', 'storm', 'sunny', 'windy']).isRequired,
  temperature: PropTypes.number,
  date: PropTypes.string,
  unit: PropTypes.oneOf(['C', 'F', 'K', 'R'])
}

module.exports = Weather

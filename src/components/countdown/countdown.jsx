'use strict'

const React = require('react')
const CountdownManager = require('./lib/countdownManager')
const classNames = require('classnames')
const PropTypes = require('prop-types')

class Countdown extends React.Component {
  constructor (props) {
    super(props)

    const date = { startDate: props.until }
    this.countdownManager = new CountdownManager(date)
    this.state = {
      time: this.countdownManager.time()
    }

    this.onCountdown = this.onCountdown.bind(this)
  }

  componentDidMount () {
    this.startCountdownManager()
  }

  componentWillUnmount () {
    this.stopCountdownManager()
  }

  componentWillReceiveProps (nextProps) {
    this.stopCountdownManager()
    this.countdownManager.restart(nextProps.date)
    this.setState({ time: this.countdownManager.time() })
  }

  startCountdownManager () {
    this.countdownManager.start(this.onCountdown)
  }

  onCountdown (time) {
    if (this.countdownManager.hasDatePassed()) {
      this.countdownManager.stop()
    }
    this.setState({ time: time })
  }

  stopCountdownManager () {
    return this.countdownManager.stop()
  }

  render () {
    const { size, purpose } = this.props
    const { days, hours, minutes, seconds } = this.state.time
    const classes = classNames('component-countdown', size, purpose)
    return (
      <div className={classes} role='timer'>
        <div>{days} <small>Days</small></div>
        <div>{hours} <small>Hours</small></div>
        <div>{minutes} <small>Minutes</small></div>
        <div>{seconds} <small>Seconds</small></div>
      </div>
    )
  }
}

Countdown.propTypes = {
  purpose: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info']),
  size: PropTypes.oneOf(['default', 'small', 'medium', 'large', 'extra-large']),
  until: PropTypes.string
}

module.exports = Countdown

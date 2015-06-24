var React = require('react');
var rcUtil = require('rc-util');
var KeyCode = rcUtil.KeyCode;
var TimePanel = require('./timePanelView');
var setHourOfDay = 'setHourOfDay';
var setMinutes = 'setMinutes';
var setSeconds = 'setSeconds';

function padding(number) {
  if (number < 10) {
    number = '0' + number;
  }
  return number;
}

function loop(value, min, max) {
  if (value === min - 1) {
    value = max;
  } else if (value === max + 1) {
    value = min;
  }
  return value;
}

function keyDownWrap(method, min, max) {
  return function (e) {
    var value = e.target.value;
    var number = parseInt(value, 10);
    var keyCode = e.keyCode;
    var handled;
    if (keyCode === KeyCode.DOWN) {
      number++;
      e.stopPropagation();
      e.preventDefault();
      handled = 1;
    } else if (keyCode === KeyCode.UP) {
      number--;
      e.stopPropagation();
      e.preventDefault();
      handled = 1;
    }
    if (handled) {
      number = loop(number, min, max);
      var time = this.props.value.clone();
      time[method](number);
      this.props.onChange(time, e);
    }
  };
}

module.exports = React.createClass({

  onSelectPanel: function(value, setter) {
    this.setState({
      showHourPanel: 0,
      showMinutePanel: 0,
      showSecondPanel: 0
    }, ()=> {
      // ie9 has broken focus
      React.findDOMNode(this.refs[setter]).focus();
    });
    this.props.onChange(value);
  },

  onHourClick: function() {
    this.setState({
      showHourPanel: 1,
      showMinutePanel: 0,
      showSecondPanel: 0
    });
  },

  onMinuteClick: function() {
    this.setState({
      showHourPanel: 0,
      showMinutePanel: 1,
      showSecondPanel: 0
    });
  },

  onSecondClick: function() {
    this.setState({
      showHourPanel: 0,
      showMinutePanel: 0,
      showSecondPanel: 1
    });
  },

  shouldComponentUpdate: function() {
    return rcUtil.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  },

  render: function() {
    return require('../templates/timeViewTemplate.jsx')(this.props);
  }
});

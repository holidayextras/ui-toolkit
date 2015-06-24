var React = require('react');
var DateTimeFormat = require('gregorian-calendar-format');
var GregorianCalendar = require('gregorian-calendar');
var rcUtil = require('rc-util');
var KeyCode = rcUtil.KeyCode;
var DateTable = require('./date/dateTableView');
var CalendarHeader = require('./calendar/calendarHeaderView');
var CalendarFooter = require('./calendar/calendarFooterView');
var staticPrefixClsFn = require('./util/prefixClsFn');

function noop() {
}

function goStartMonth() {
  var next = this.state.value.clone();
  next.setDayOfMonth(1);
  this.setState({value: next});
}

function goEndMonth() {
  var next = this.state.value.clone();
  next.setDayOfMonth(next.getActualMaximum(GregorianCalendar.MONTH));
  this.setState({value: next});
}

function goMonth(direction) {
  var next = this.state.value.clone();
  next.addMonth(direction);
  this.setState({value: next});
}

function goYear(direction) {
  var next = this.state.value.clone();
  next.addYear(direction);
  this.setState({value: next});
}

function goWeek(direction) {
  var next = this.state.value.clone();
  next.addWeekOfYear(direction);
  this.setState({value: next});
}

function goDay(direction) {
  var next = this.state.value.clone();
  next.addDayOfMonth(direction);
  this.setState({value: next});
}

function getNow() {
  var value = new GregorianCalendar();
  value.setTime(Date.now());
  return value;
}

function getNowByCurrentStateValue(value) {
  value = value || getNow();
  value = value.clone();
  value.setTime(Date.now());
  return value;
}

module.exports = React.createClass({

  propTypes: {
    value: React.PropTypes.object,
    defaultValue: React.PropTypes.object,
    className: React.PropTypes.string,
    orient: React.PropTypes.arrayOf(React.PropTypes.oneOf(['left', 'top', 'right', 'bottom'])),
    locale: React.PropTypes.object,
    showWeekNumber: React.PropTypes.bool,
    style: React.PropTypes.object,
    showToday: React.PropTypes.bool,
    showTime: React.PropTypes.bool,
    onSelect: React.PropTypes.func,
    onBlur: React.PropTypes.func
  },

  defaultProps: {
    locale: require('./locale/en-us'),
    style: {},
    prefixCls: 'rc-calendar',
    onKeyDown: noop,
    className: '',
    showToday: true,
    onSelect: noop,
    onFocus: noop,
    onBlur: noop,
    onClear: noop,
    onOk: noop
  },

  handleOk: function() {
    this.props.onOk(this.state.value);
  },

  setValue: function(current) {
    this.setState({
      value: current
    });
  },

  chooseToday: function() {
    var today = this.state.value.clone();
    today.setTime(Date.now());
    this.handleSelect(today);
  },

  handleSelect: function(current, keyDownEvent) {
    var props = this.props;
    this.setState({
      value: current
    });
    if (!keyDownEvent) {
      props.onSelect(current);
    }
  },

  handleKeyDown: function(e) {
    var keyCode = e.keyCode;
    // mac
    var ctrlKey = e.ctrlKey || e.metaKey;
    switch (keyCode) {
      case KeyCode.DOWN:
        goWeek.call(this, 1);
        e.preventDefault();
        return 1;
      case KeyCode.UP:
        goWeek.call(this, -1);
        e.preventDefault();
        return 1;
      case KeyCode.LEFT:
        if (ctrlKey) {
          this.previousYear();
        } else {
          goDay.call(this, -1);
        }
        e.preventDefault();
        return 1;
      case KeyCode.RIGHT:
        if (ctrlKey) {
          this.nextYear();
        } else {
          goDay.call(this, 1);
        }
        e.preventDefault();
        return 1;
      case KeyCode.HOME:
        goStartMonth.call(this);
        e.preventDefault();
        return 1;
      case KeyCode.END:
        goEndMonth.call(this);
        e.preventDefault();
        return 1;
      case KeyCode.PAGE_DOWN:
        this.nextMonth();
        e.preventDefault();
        return 1;
      case KeyCode.PAGE_UP:
        this.previousMonth();
        e.preventDefault();
        return 1;
      case KeyCode.ENTER:
        this.props.onSelect(this.state.value);
        e.preventDefault();
        return 1;
      default:
        this.props.onKeyDown(e);
        return 1;
    }
  },

  handleClear: function() {
    this.props.onClear();
  },

  prefixClsFn: function() {
    return staticPrefixClsFn.apply(this, arguments);
  },

  handleFocus: function() {
    if (this._blurTimer) {
      clearTimeout(this._blurTimer);
      this._blurTimer = null;
    } else {
      this.props.onFocus();
    }
  },

  handleBlur: function() {
    if (this._blurTimer) {
      clearTimeout(this._blurTimer);
    }
    var self = this;
    this._blurTimer = setTimeout(function(){ self.props.onBlur(); }, 100);
  },

  shouldComponentUpdate: function() {
    return rcUtil.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  },

  componentWillReceiveProps: function(nextProps) {
    var value = nextProps.value;
    if (value !== undefined) {
      value = value || nextProps.defaultValue || getNowByCurrentStateValue(this.state.value);
      this.setState({
        value: value
      });
    }
    if (nextProps.orient) {
      this.setState({
        orient: nextProps.orient
      });
    }
    if (nextProps.locale !== this.props.locale) {
      this.dateFormatter = new DateTimeFormat(nextProps.locale.dateFormat);
    }
  },

  render: function() {
    return require('../templates/calendarTemplate.jsx')(this.props);
  }
});

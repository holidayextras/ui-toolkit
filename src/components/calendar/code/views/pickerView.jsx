var React = require('react');
var DateTimeFormat = require('gregorian-calendar-format');
var rcUtil = require('rc-util');
var toFragment = rcUtil.Children.mapSelf;
var KeyCode = rcUtil.KeyCode;
var domAlign = require('dom-align');
var orientMap = {
  tl: ['top', 'left'],
  tr: ['top', 'right'],
  bl: ['bottom', 'left'],
  br: ['bottom', 'right']
};
var createChainedFunction = rcUtil.createChainedFunction;

function prevent(e) {
  e.preventDefault();
}

function getImmutableOrient(orient) {
  if (orient) {
    for (var i in orientMap) {
      var original = orientMap[i];
      if (original[0] === orient[0] && original[1] === orient[1]) {
        return original;
      }
    }
  }
}

function refFn(field, component) {
  this[field] = component;
}

function getContainerClassName(prefixCls, open) {
  var ret = [prefixCls + '-container'];
  if (open) {
    ret.push(prefixCls + '-container-open');
  }
  return ret.join(' ');
}

module.exports = React.createClass({

  propTypes: {
    onChange: React.PropTypes.func,
    renderCalendarToBody: React.PropTypes.bool
  },

  defaultProps: {
    prefixCls: 'rc-calendar-picker',
    renderCalendarToBody: false,
    onChange() {
    },
    formatter: new DateTimeFormat('yyyy-MM-dd')
  },

  componentWillReceiveProps: function(nextProps) {
    var value = nextProps.value;
    if (value !== undefined) {
      // null special meaning
      value = value || nextProps.defaultValue || null;
      this.setState({
        value: value
      });
    }
  },

  componentWillUnmount: function() {
    if (this.calendarContainer) {
      React.unmountComponentAtNode(this.calendarContainer);
      this.calendarContainer.parentNode.removeChild(this.calendarContainer);
      this.calendarContainer = null;
    }
  },

  componentDidMount: function() {
    this.componentDidUpdate();
  },

  componentDidUpdate: function(prevProps, prevState) {
    prevState = prevState || {};
    var prefixCls = this.props.prefixCls;
    if (this.props.renderCalendarToBody && !this.state.open && prevState.open) {
      this.getCalendarContainer().className = getContainerClassName(prefixCls);
    }
    if (this.state.open && !prevState.open) {
      if (this.props.renderCalendarToBody) {
        this.getCalendarContainer().className = getContainerClassName(prefixCls, true);
        React.render(this.getCalendarElement(), this.getCalendarContainer(), ()=> {
          this.alignCalendar();
        });
      } else {
        this.alignCalendar();
      }
    }
  },

  getCalendarContainer: function() {
    if (!this.calendarContainer) {
      this.calendarContainer = document.createElement('div');
      document.body.appendChild(this.calendarContainer);
    }
    return this.calendarContainer;
  },

  alignCalendar: function() {
    var orient = this.calendarElement.props.orient;
    var points = ['tl', 'bl'];
    var offset = [0, 5];
    if (orient.indexOf('top') !== -1 && orient.indexOf('left') !== -1) {
      points = ['tl', 'bl'];
    } else if (orient.indexOf('top') !== -1 && orient.indexOf('right') !== -1) {
      points = ['tr', 'br'];
    } else if (orient.indexOf('bottom') !== -1 && orient.indexOf('left') !== -1) {
      points = ['bl', 'tl'];
      offset = [0, -5];
    } else if (orient.indexOf('bottom') !== -1 && orient.indexOf('right') !== -1) {
      points = ['br', 'tr'];
      offset = [0, -5];
    }

    var align = domAlign(React.findDOMNode(this.calendarInstance), React.findDOMNode(this.inputInstance), {
      points: points,
      offset: offset,
      overflow: {
        adjustX: 1,
        adjustY: 1
      }
    });
    points = align.points;
    var newOrient = orientMap[points[0]];
    this.calendarInstance.setState({
      orient: newOrient
    });
    React.findDOMNode(this.calendarInstance).focus();
  },

  open: function(callback) {
    this.setState({
      open: true
    }, callback);
  },

  close: function(callback) {
    this.setState({
      open: false
    }, callback);
  },

  focusInput: function() {
    React.findDOMNode(this.inputInstance).focus();
  },

  handleInputClick: function() {
    this.toggle();
  },

  handleTriggerClick: function() {
    this.toggle();
  },

  toggle: function(callback) {
    this.setState({
      open: !this.state.open
    }, callback);
  },

  handleKeyDown: function(e) {
    // down
    if (e.keyCode === KeyCode.DOWN) {
      e.preventDefault();
      this.open();
    }
  },

  handleCalendarKeyDown: function(e) {
    if (e.keyCode === KeyCode.ESC) {
      e.stopPropagation();
      this.close(this.focusInput);
    }
  },

  handleCalendarSelect: function(value) {
    var currentValue = this.state.value;
    if (this.props.calendar.props.showTime) {
      this.setState({
        value: value
      });
    } else {
      this.setState({
        value: value,
        open: false
      }, this.focusInput);
    }
    if (!currentValue || currentValue.getTime() !== value.getTime()) {
      this.props.onChange(value);
    }
  },

  handleCalendarBlur: function() {
    // if invisible, will not trigger blur
    this.setState({
      open: false
    });
  },

  handleCalendarOk: function() {
    this.setState({
      open: false
    }, this.focusInput);
  },

  handleCalendarClear: function() {
    this.setState({
      open: false,
      value: null
    }, this.focusInput);
    if (this.state.value !== null) {
      this.props.onChange(null);
    }
  },

  getCalendarElement: function() {
    var props = this.props;
    var calendarInstance = this.calendarInstance;
    var calendarProp = props.calendar;
    this.calendarElement = React.cloneElement(calendarProp, {
      ref: rcUtil.createChainedFunction(calendarProp.props.ref, this.saveCalendarRef),
      value: this.state.value,
      // focused: true,
      orient: calendarInstance && calendarInstance.state.orient || getImmutableOrient(calendarProp.props.orient) || orientMap.tl,
      onBlur: this.handleCalendarBlur,
      onKeyDown: this.handleCalendarKeyDown,
      onOk: createChainedFunction(calendarProp.props.onOk, this.handleCalendarOk),
      onSelect: createChainedFunction(calendarProp.props.onSelect, this.handleCalendarSelect),
      onClear: createChainedFunction(calendarProp.props.onClear, this.handleCalendarClear)
    });
    return this.calendarElement;
  },

  render: function() {
    return require('../templates/pickerTemplate.jsx')(this.props);
  }
});

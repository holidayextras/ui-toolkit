var React = require('react');
var rcUtil = require('rc-util');
var toFragment = rcUtil.Children.mapSelf;

function prevent(e) {
  e.preventDefault();
}

module.exports = function(props) {

  var renderCalendarToBody = props.renderCalendarToBody;
  var input = props.children;
  if (!React.isValidElement(input)) {
    var children = input;
    React.Children.forEach(children, function(m){
      input = m;
    });
  }
  var state = this.state;
  var value = state.value;
  var calendar;
  if (!renderCalendarToBody) {
    calendar = state.open ? this.getCalendarElement() : this.calendarElement;
  }
  var inputValue = '';
  if (value) {
    inputValue = props.formatter.format(value);
  }
  input = React.cloneElement(input, {
    ref: rcUtil.createChainedFunction(input.props.ref, this.saveInputRef),
    readOnly: true,
    onClick: this.handleInputClick,
    value: inputValue,
    onKeyDown: this.handleKeyDown
  });
  var classes = [props.prefixCls];
  if (state.open) {
    classes.push(props.prefixCls + '-open');
  }
  var trigger = props.trigger;
  if (trigger) {
    trigger = React.cloneElement(trigger, {
      onClick: this.handleTriggerClick,
      unselectable: true,
      onMouseDown: prevent
    });
  }

  return (
    <span className={classes.join(' ')}>{toFragment([input, calendar, trigger])}</span>
  );
};

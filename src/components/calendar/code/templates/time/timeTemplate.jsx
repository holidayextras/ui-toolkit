var rcUtil = require('rc-util');
var TimePanel = require('./timePanelView');
var setHourOfDay = 'setHourOfDay';
var setMinutes = 'setMinutes';
var setSeconds = 'setSeconds';

module.exports = function(props) {

  var state = this.state;
  var prefixClsFn = props.prefixClsFn;
  var value = props.value;
  var locale = props.locale;
  var hour = value.getHourOfDay();
  var minute = value.getMinutes();
  var second = value.getSeconds();
  var panel;
  var commonProps = {
    value: value,
    onSelect: this.onSelectPanel,
    rootPrefixCls: prefixClsFn()
  };

  if (state.showHourPanel) {
    panel = <TimePanel rowCount={6} colCount={4} getter="getHourOfDay" setter={setHourOfDay}
                       title={locale.hourPanelTitle}
      {...commonProps}/>;
  }
  else if (state.showMinutePanel) {
    panel = <TimePanel rowCount={6} colCount={10} getter="getMinutes" setter={setMinutes}
                       title={locale.minutePanelTitle}
      {...commonProps}/>;
  }
  else if (state.showSecondPanel) {
    panel = <TimePanel rowCount={6} colCount={10} getter="getSeconds" setter={setSeconds}
                       title={locale.secondPanelTitle}
      {...commonProps}/>;
  }

  return (
    <span className={prefixClsFn('time')}>
      <input className = {prefixClsFn('time-input')}
        title={locale.hourInput}
        ref={setHourOfDay}
        readOnly
        value={padding(hour)}
        onClick={this.onHourClick}
        onKeyDown={this.onHourKeyDown}/>
      <span> : </span>
      <input className = {prefixClsFn('time-input')}
        title={locale.minuteInput}
        ref={setMinutes}
        readOnly
        value={padding(minute)}
        onClick={this.onMinuteClick}
        onKeyDown = {this.onMinuteKeyDown}/>
      <span> : </span>
      <input className = {prefixClsFn('time-input')}
        title={locale.secondInput}
        ref={setSeconds}
        readOnly
        value={padding(second)}
        onClick={this.onSecondClick}
        onKeyDown = {this.onSecondKeyDown}/>
    {panel}
    </span>
    );
};

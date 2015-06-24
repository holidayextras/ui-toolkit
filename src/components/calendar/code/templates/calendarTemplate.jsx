module.exports = function(props) {

  var locale = props.locale;
  var state = this.state;
  var value = state.value;
  var prefixClsFn = this.prefixClsFn;

  var className = {
    [prefixClsFn()]: 1,
    [prefixClsFn('week-number')]: props.showWeekNumber
  };

  if (props.className) {
    className[props.className] = 1;
  }

  var orient = state.orient;
  if (orient) {
    orient.forEach(o => {
      className [prefixClsFn('orient-' + o)] = 1;
    });
  }

  return (
    <div className={rcUtil.classSet(className)} style={this.props.style}
      tabIndex="0" onFocus={this.handleFocus}
      onBlur={this.handleBlur} onKeyDown={this.handleKeyDown}>
      <div style={{outline: 'none'}}>
        <CalendarHeader
          locale={locale}
          onValueChange={this.setValue}
          previousYear={this.previousYear}
          previousMonth={this.previousMonth}
          nextMonth={this.nextMonth}
          nextYear={this.nextYear}
          value={value}
          prefixClsFn={prefixClsFn}/>
        <div className = {prefixClsFn('calendar-body')}>
          <DateTable
            locale={locale}
            value={value}
            prefixClsFn={prefixClsFn}
            dateRender={props.dateRender}
            onSelect={this.handleSelect}
            disabledDate={props.disabledDate}
            showWeekNumber={props.showWeekNumber}
            dateFormatter={this.dateFormatter}/>
        </div>
        <CalendarFooter
          locale={locale}
          showClear={props.showClear}
          showOk={props.showOk}
          prefixClsFn={prefixClsFn}
          showToday={props.showToday}
          showTime={props.showTime}
          value={value}
          dateFormatter={this.dateFormatter}
          onClear={this.handleClear}
          onOk={this.handleOk}
          onSelect={this.handleSelect}
          onToday={this.chooseToday}
        />
      </div>
    </div>
  );
};

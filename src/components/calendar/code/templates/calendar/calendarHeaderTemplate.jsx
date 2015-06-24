var MonthPanel = require('../month/monthPanelView');
var YearPanel = require('../year/yearPanelView');

module.exports = function(props) {
  var state = this.state;
  var prefixClsFn = props.prefixClsFn;
  var locale = props.locale;
  var value = props.value;
  var PanelClass = state.showMonthPanel ? MonthPanel : state.showYearPanel ? YearPanel : null;
  var panel;
  if (PanelClass) {
    panel = <PanelClass locale={locale} value={value} rootPrefixCls={prefixClsFn()} onSelect={this.handleSelect}/>;
  }
  return (
    <div className = {prefixClsFn('header')}>
      <a className ={prefixClsFn('prev-year-btn')}
        role="button"
        onClick={props.previousYear}
        title={locale.previousYear}>
        «
      </a>
      <a className = {prefixClsFn('prev-month-btn')}
        role="button"
        onClick={props.previousMonth}
        title={locale.previousMonth}>
        ‹
      </a>
      {this.getMonthYearElement()}
      <a className = {prefixClsFn('next-month-btn')}
        onClick={props.nextMonth}
        title={locale.nextMonth}>
        ›
      </a>
      <a className = {prefixClsFn('next-year-btn')}
        onClick={props.nextYear}
        title={locale.nextYear}>
        »
      </a>
      {panel}
    </div>
  );
};

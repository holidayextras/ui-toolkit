var React = require('react');
var cx = require('rc-util').classSet;
var YearPanel = require('../year/yearPanelView');

function chooseMonth(month) {
  var next = this.state.value.clone();
  next.setMonth(month);
  this.props.onSelect(next);
}

module.exports = function(props) {
  var value = this.state.value;
  var locale = props.locale;
  var months = this.getMonths();
  var year = value.getYear();
  var currentMonth = value.getMonth();
  var prefixClsFn = this.prefixClsFn;
  var monthsEls = months.map(function(month, index){
    var tds = month.map(function(m){
      var classNameMap = {};
      classNameMap[prefixClsFn('cell')] = 1;
      classNameMap[prefixClsFn('selected-cell')] = m.value === currentMonth;
      return (
        <td role="gridcell"
          key={m.value}
          onClick={chooseMonth.bind(this, m.value)}
          title={m.title}
          className = {cx(classNameMap)}>
          <a
            className = {prefixClsFn('month')}>
          {m.content}
          </a>
        </td>);
    });
    return (<tr key={index} role="row">{tds}</tr>);
  });

  var yearPanel;
  if (this.state.showYearPanel) {
    yearPanel = <YearPanel locale={locale} value={value} rootPrefixCls={props.rootPrefixCls} onSelect={this.onYearPanelSelect}/>;
  }

  return (
    <div className= {this.state.prefixCls}>
      <div>
        <div className = {prefixClsFn('header')}>
          <a className = {prefixClsFn('prev-year-btn')}
            role="button"
            onClick={this.previousYear}
            title={locale.previousYear}>
            «
          </a>

          <a className = {prefixClsFn('year-select')}
            role="button"
            onClick={this.showYearPanel}
            title={locale.yearSelect}>
            <span className = {prefixClsFn('year-select-content')}>{year}</span>
            <span className = {prefixClsFn('year-select-arrow')}>x</span>
          </a>

          <a className = {prefixClsFn('next-year-btn')}
            role="button"
            onClick={this.nextYear}
            title={locale.nextYear}>
            »
          </a>
        </div>
        <div className = {prefixClsFn('body')}>
          <table className = {prefixClsFn('table')} cellSpacing="0" role="grid">
            <tbody className = {prefixClsFn('tbody')}>
            {monthsEls}
            </tbody>
          </table>
        </div>
      </div>
    {yearPanel}
    </div>
  );
};

var React = require('react');
var cx = require('rc-util').classSet;
var DecadePanel = require('../../views/decade/decadePanelView');

function chooseYear(year) {
  var next = this.state.value.clone();
  next.setYear(year);
  this.props.onSelect(next);
}

module.exports = function(props) {

  var value = this.state.value;
  var locale = props.locale;
  var years = this.getYears();
  var currentYear = value.getYear();
  var startYear = parseInt(currentYear / 10, 10) * 10;
  var endYear = startYear + 9;
  var prefixClsFn = this.prefixClsFn;

  var self = this;
  var yeasEls = years.map(function(row, index){
    var tds = row.map(function(y){
      var classNameMap = {};
      classNameMap[prefixClsFn('cell')] = 1;
      classNameMap[prefixClsFn('selected-cell')] = y.year === currentYear;
      classNameMap[prefixClsFn('last-decade-cell')] = y.year < startYear;
      classNameMap[prefixClsFn('next-decade-cell')] = y.year > endYear;
      var clickHandler;
      if (y.year < startYear) {
        clickHandler = self.previousDecade;
      } else if (y.year > endYear) {
        clickHandler = self.nextDecade;
      } else {
        clickHandler = chooseYear.bind(self, y.year);
      }
      return (
        <td role="gridcell"
          title={y.title}
          key={y.content}
          onClick={clickHandler}
          className = {cx(classNameMap)}
        >
          <a
            className={prefixClsFn('year')}>
          {y.content}
          </a>
        </td>);
    });
    return (<tr key={index} role="row">{tds}</tr>);
  });

  var decadePanel;
  if (this.state.showDecadePanel) {
    decadePanel = <DecadePanel locale={locale} value={value} rootPrefixCls={props.rootPrefixCls} onSelect={this.onDecadePanelSelect}/>;
  }

  return (
    <div className={this.state.prefixCls}>
      <div>
        <div className = {prefixClsFn('header')}>
          <a className = {prefixClsFn('prev-decade-btn')}
            role="button"
            onClick={this.previousDecade}
            title={locale.previousDecade}>
            «
          </a>

          <a className = {prefixClsFn('decade-select')}
            role="button"
            onClick={this.showDecadePanel}
            title={locale.decadeSelect}>
            <span className = {prefixClsFn('decade-select-content')}>
              {startYear}-{endYear}
            </span>
            <span className = {prefixClsFn('decade-select-arrow')}>x</span>
          </a>

          <a className = {prefixClsFn('next-decade-btn')}
            role="button"
            onClick={this.nextDecade}
            title={locale.nextDecade}>
            »
          </a>
        </div>
        <div className = {prefixClsFn('body')}>
          <table className = {prefixClsFn('table')} cellSpacing="0" role="grid">
            <tbody className = {prefixClsFn('tbody')}>
            {yeasEls}
            </tbody>
          </table>
        </div>
      </div>
    {decadePanel}
    </div>
  );
};

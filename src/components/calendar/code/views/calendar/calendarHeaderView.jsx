var React = require('react');
var DateTimeFormat = require('gregorian-calendar-format');
var toFragment = require('rc-util').Children.mapSelf;

module.exports = React.createClass({

  componentWillReceiveProps: function(nextProps) {
    var locale = this.props.locale;
    if (nextProps.locale !== locale) {
      this.yearFormatter = new DateTimeFormat(locale.yearFormat);
      this.monthFormatter = new DateTimeFormat(locale.monthFormat);
    }
  },

  showMonthPanel: function() {
    this.setState({
      showMonthPanel: 1,
      showYearPanel: 0
    });
  },

  showYearPanel: function() {
    this.setState({
      showMonthPanel: 0,
      showYearPanel: 1
    });
  },

  getMonthYearElement: function() {
    var props = this.props;
    var prefixClsFn = props.prefixClsFn;
    var locale = props.locale;
    var value = this.props.value;
    var monthBeforeYear = locale.monthBeforeYear;
    var selectClassName = prefixClsFn(monthBeforeYear ? 'my-select' : 'ym-select');
    var year = <a className = {prefixClsFn('year-select')}
      role="button"
      onClick={this.showYearPanel}
      title={locale.monthSelect}>{this.yearFormatter.format(value)}</a>;
    var month = <a className ={prefixClsFn('month-select')}
      role="button"
      onClick={this.showMonthPanel}
      title={locale.monthSelect}>{this.monthFormatter.format(value)}</a>;
    var my = [];
    if (monthBeforeYear) {
      my = [month, year];
    } else {
      my = [year, month];
    }
    return <span className={selectClassName}>
    {toFragment(my)}
    </span>;
  },

  handleSelect: function(value) {
    this.setState({
      showMonthPanel: 0,
      showYearPanel: 0
    });

    this.props.onValueChange(value);
  },

  render: function() {
    return require('../templates/calendarHeaderTemplate.jsx')(this.props);
  }
});

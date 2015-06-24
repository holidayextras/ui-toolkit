var React = require('react');
var ROW = 4;
var COL = 3;
var cx = require('rc-util').classSet;
var YearPanel = require('../year/yearPanelView');
var staticPrefixClsFn = require('../util/prefixClsFn');

function goYear(direction) {
  var next = this.state.value.clone();
  next.addYear(direction);
  this.setState({
    value: next
  });
}

function showYearPanel() {
  this.setState({
    showYearPanel: 1
  });
}

function chooseMonth(month) {
  var next = this.state.value.clone();
  next.setMonth(month);
  this.props.onSelect(next);
}

function onYearPanelSelect(current) {
  this.setState({
    value: current,
    showYearPanel: 0
  });
}

module.exports = React.createClass({

  defaultProps: {
    onSelect: function(){}
  },

  getMonths: function() {
    var props = this.props;
    var value = this.state.value;
    var current = value.clone();
    var locale = props.locale;
    var months = [];
    var shortMonths = locale.format.shortMonths;
    var index = 0;
    for (var i = 0; i < ROW; i++) {
      months[i] = [];
      for (var j = 0; j < COL; j++) {
        current.setMonth(index);
        months[i][j] = {
          value: index,
          content: shortMonths[index],
          title:shortMonths[index]
        };
        index++;
      }
    }

    return months;
  },

  render: function() {
    return require('../templates/monthPanelTemplate.jsx')(this.props);
  }
});


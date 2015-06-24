'use strict';

var React = require('react');
var ROW = 4;
var COL = 3;
var cx = require('rc-util').classSet;
var DecadePanel = require('../decade/decadePanelView');
var staticPrefixClsFn = require('../util/prefixClsFn');

function goYear(direction) {
  var next = this.state.value.clone();
  next.addYear(direction);
  this.setState({value: next});
}

function chooseYear(year) {
  var next = this.state.value.clone();
  next.setYear(year);
  this.props.onSelect(next);
}

module.exports = React.createClass({

  defaultProps: {
    onSelect: function(){}
  },

  showDecadePanel: function() {
    this.setState({
      showDecadePanel: 1
    });
  },

  onDecadePanelSelect: function(current) {
    this.setState({
      value: current,
      showDecadePanel: 0
    });
  },

  getYears: function() {
    var value = this.state.value;
    var currentYear = value.getYear();
    var startYear = parseInt(currentYear / 10, 10) * 10;
    var previousYear = startYear - 1;
    var endYear = startYear + 9;
    var years = [];
    var index = 0;
    for (var i = 0; i < ROW; i++) {
      years[i] = [];
      for (var j = 0; j < COL; j++) {
        var year = previousYear + index;
        var content;
        if (year < startYear) {
          content = '';
        } else if (year > endYear) {
          content = '';
        } else {

          content = year + '';
        }
        years[i][j] = {
          content: content,
          year: year,
          title: content
        };
        index++;
      }
    }
    return years;
  },

  render: function() {
    return require('../templates/yearPanelTemplate.jsx')(this.props);
  }
});

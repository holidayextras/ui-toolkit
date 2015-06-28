var React = require('react');
var ROW = 4;
var COL = 3;

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
          title: shortMonths[index]
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


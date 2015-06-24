var React = require('react');

module.exports = React.createClass({

  getTodayTime: function() {
    var value = this.props.value;
    var today = value.clone();
    today.setTime(Date.now());
    return this.props.dateFormatter.format(today);
  },

  render: function() {
    return require('../templates/calendarFooterTemplate.jsx')(this.props);
  }
});

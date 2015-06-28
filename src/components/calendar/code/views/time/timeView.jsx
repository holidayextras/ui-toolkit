var React = require('react');
var rcUtil = require('rc-util');

module.exports = React.createClass({

  onSelectPanel: function(value, setter) {
    var self = this;
    this.setState({
      showHourPanel: 0,
      showMinutePanel: 0,
      showSecondPanel: 0
    }, function(){
      // ie9 has broken focus
      React.findDOMNode(self.refs[setter]).focus();
    });
    this.props.onChange(value);
  },

  onHourClick: function() {
    this.setState({
      showHourPanel: 1,
      showMinutePanel: 0,
      showSecondPanel: 0
    });
  },

  onMinuteClick: function() {
    this.setState({
      showHourPanel: 0,
      showMinutePanel: 1,
      showSecondPanel: 0
    });
  },

  onSecondClick: function() {
    this.setState({
      showHourPanel: 0,
      showMinutePanel: 0,
      showSecondPanel: 1
    });
  },

  shouldComponentUpdate: function() {
    return rcUtil.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  },

  render: function() {
    return require('../templates/timeViewTemplate.jsx')(this.props);
  }
});

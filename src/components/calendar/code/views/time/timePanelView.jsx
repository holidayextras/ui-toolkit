var React = require('react');
var cx = require('rc-util').classSet;
var staticPrefixClsFn = require('../util/prefixClsFn');

function choose(hour, e) {
  var next = this.state.value.clone();
  var method = this.props.setter;
  next[method](hour);
  this.props.onSelect(next, method);
  e.preventDefault();
}

module.exports = React.createClass({

  defaultProps: {
    onSelect: function(){}
  },

  render: function() {
    return require('../templates/timePanelTemplate.jsx')(this.props);
  }
});

var React = require('react');

module.exports = React.createClass({

  propTypes: {
    children: React.PropTypes.node
  },

  render: function() {
    return (
      <ul className="component-icon-list">
        {this.props.children}
      </ul>
    );
  }
});

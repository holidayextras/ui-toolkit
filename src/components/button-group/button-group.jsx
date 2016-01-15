'use strict';

var React = require('react');
var Button = require('../button');

module.exports = React.createClass({

  propTypes: {
    buttonText: React.PropTypes.string.isRequired,
    options: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    data: React.PropTypes.object,
    handleClick: React.PropTypes.func.isRequired,
    purpose: React.PropTypes.oneOf(['default', 'primary',' secondary', 'success', 'warning', 'danger', 'info']),
    size: React.PropTypes.oneOf(['default', 'small', 'medium', 'large', 'extra-large'])
  },

  getDefaultProps: function() {
    return {
      purpose: 'success',
      size: 'large'
    };
  },

  buildListOptions: function() {
    console.log('x');
    var self = this;
    var options = this.props.options.map(function(option, index) {
      return (
        <li key={index}>{option}</li>
      );
    });

    return (
      <ul className="dropdown-menu interstitial-dropdown" handleClick={self.props.handleClick}>{options}</ul>
    );
  },

  render: function() {
    var self = this;

    var buttonDataAttrs = {
      toggle: 'dropdown'
    };

    return (
      <div className="grouped-buttons">
        <Button id="left-button"
          data={self.props.data}
          handleClick={this.props.handleClick}
          purpose={this.props.purpose}
          size={this.props.size}>
          {this.props.buttonText}
        </Button>
        <Button id="right-button"
          data={buttonDataAttrs}
          purpose={this.props.purpose}
          size={this.props.size}
          className="dropdown-toggle"
          data-toggle="dropdown">
          <i className="fa fa-caret-up"></i>
        </Button>
          {this.buildListOptions()}
      </div>
    );
  }
});

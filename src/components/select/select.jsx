'use strict';
var React = require('react');
var DataAttributesMixin = require('react-data-attributes-mixin');

module.exports = React.createClass({

  mixins: [DataAttributesMixin],

  propTypes: {
    label: React.PropTypes.string,
    name: React.PropTypes.string,
    id: React.PropTypes.string,
    children: React.PropTypes.string,
    handleChange: React.PropTypes.func,
    data: React.PropTypes.object
  },

  getInitialState: function() {
    return {
      value: this.props.children,
      error: null,
      valid: true
    };
  },

  getDefaultProps: function() {
    return {
      id: 'component-select',
      name: 'component-select'
    };
  },


  handleChange: function(e) {
    var self = this;
    var value = (e.target) ? e.target.value : null;

    self.setState({
      value: value
    });

    if (self.props.handleChange) {
      self.props.handleChange.apply(this, arguments);
    }
  },

  render: function() {
    var classes = 'component-select';
    var dataAttributes = this.getDataAttributesFromProps();

    // the form label
    var label;
    if (this.props.label) {
      label = ( <label className="component-select-label" htmlFor={this.props.id}>{this.props.label}</label > );
    }

    /**
     * Create the span element used for containing messages
     * related to the element.
     */
    var span;
    if (this.state.error) {
      span = ( <span className="component-select-error">{this.state.error}</span> );
    }

    return (
      <div className={classes}>
        {label}
        <select
          className="component-select-field"
          name={this.props.name}
          value={this.state.value}
          id={this.props.id}
          onChange={this.handleChange}
          {...dataAttributes}
          >
          {this.props.children}
        </select>
        {span}
      </div>
    );
  }
});

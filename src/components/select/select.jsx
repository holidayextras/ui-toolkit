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
    data: React.PropTypes.object,
    multiple: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      id: 'component-select',
      name: 'component-select',
      multiple: false
    };
  },

  handleChange: function(e) {
    if (self.props.handleChange) {
      self.props.handleChange.apply(this, arguments);
    }
  },

  render: function() {
    var classes = 'component-select';
    var dataAttributes = this.getDataAttributesFromProps();

    var label;
    if (this.props.label) {
      label = ( <label className="component-select-label" htmlFor={this.props.id}>{this.props.label}</label > );
    }

    return (
      <div className={classes}>
        {label}
        <select
          className="component-select-field"
          name={this.props.name}
          id={this.props.id}
          onChange={this.handleChange}
          multiple={this.props.multiple}
          {...dataAttributes}
          >
          {this.props.children}
        </select>
      </div>
    );
  }
});

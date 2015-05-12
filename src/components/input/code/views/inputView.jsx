var React = require('react');

module.exports = React.createClass({

	/**
	 * @function focus
	 * @description Focus on the element.
	 */
	focus: function() {
		if (this.isMounted()) {
			this.refs.input.getDOMNode().focus();
		}
	},

	/**
	 * @function value
	 * @returns {string} The value of the input.
	 */
	value: function() {
		return this.state.value;
	},

	/**
	 * @function clear
	 * @description Clear the value of the element.
	 */
	clear: function() {
		this.setState({
			value: ''
		});
	},

	/**
	 * @private
	 * @function onChange
	 * @descriptin When the value of the input changes, update the state.
	 */
	_onChange: function(event) {

		// Get the value from the input
		var value = event.target.value;

		// Set the state
		this.setState({
			value: value
		});

		// Run the onChange function if it exists
		if (this.props.onChange) {
			this.props.onChange(event, value);
		}

	},

	propTypes: {
		label: React.PropTypes.string,
		type: React.PropTypes.string,
		placeholder: React.PropTypes.string,
		defaultValue: React.PropTypes.string,
		error: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		onChange: React.PropTypes.func
	},

	getInitialState: function() {
		return {
			value: this.props.defaultValue || '',
			validationStarted: false
		}
	},

	getDefaultProps: function() {
		return {
			type: 'text',
			onChange: this._onChange
		}
	},

	render: function() {
		return require('../templates/inputTemplate.jsx')(this.props);
	}
});
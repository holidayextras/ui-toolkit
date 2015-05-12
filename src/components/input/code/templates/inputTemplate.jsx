var React = require('react');

module.exports = function (props){

	var classes = classNames('input-group', {
		'input-group-error': this.props.error || false,
		'input-group-disabled': this.props.disabled || false
	});

	// the form label
	var label;

	if (this.props.label){
		label = ( <label className="input-group-label" for={this.props.name}>{this.props.label}</label > );
	}

	/**
	 * Create the span element used for containing messages
	 * related to the element.
	 */
	var span;

	if (this.props.error)
	{
		span = ( <span className="input-group-span">{this.props.error}</span> );
	}
	else if (this.props.message)
	{
		span = ( <span className="input-group-span">{this.props.message}</span> );
	}

	return (
		<div className={classes} ref={this.props.ref}>
			{label}
			<input
				ref="input"
				className="input-group-field"
				type={this.props.type}
				name={this.props.ref}
				placeholder={this.props.placeholder}
				value={this.state.value}
				onChange={this._onChange}/>
			{span}
		</div>
	);
};
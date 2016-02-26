'use strict';
const React = require('react');
const { string } = React.PropTypes;

module.exports = React.createClass({
	propTypes: {
		comment: string.isRequired,
		author: string.isRequired,
		date: string
	},

	render: function() {
		const {date, comment, author} = this.props;

		return (
			<blockquote itemProp="review" itemScope itemType="http://schema.org/Review">
        <p itemProp="description">{comment}</p>
        <small>
          <cite itemProp="author">{author}</cite>
          {date && <em itemProp="datePublished" content={date}>{date}</em>}
        </small>
      </blockquote>
		)
	}
})
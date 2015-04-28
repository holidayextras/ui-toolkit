var React = require('react');
var RatingComponent = require('../code');

React.render(<RatingComponent rating={4} outOf={5} blankIcon="☆" >★</RatingComponent>, document.body);
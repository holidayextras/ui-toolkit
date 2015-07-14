var React = require('react');

module.exports = function(props) {
  return (
    <img alt={props.alt} src={props.src} onClick={props.handleClick} className="component-image" />
  );
};

var React = require('react');

module.exports = function(props) {
  return (
    <img alt={props.alt} src={props.src} className="ui-component-image" />
  );
};
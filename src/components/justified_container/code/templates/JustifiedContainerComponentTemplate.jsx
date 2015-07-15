var React = require('react');

module.exports = function(props) {
  return (
    <div style={props.styles} className="component-justified-container">
      {props.children}
    </div>
  );
};

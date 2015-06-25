var React = require('react');

module.exports = function(props) {
  return (
    <ul className="component-icon-list">
      {props.children}
    </ul>
  );
};

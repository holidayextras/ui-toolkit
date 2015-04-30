var React = require('react');

module.exports = function(props) {
  return (
    <div className="ui-component-product-tile">
      <img {...props.image} />
      <div className="caption">
        <h4>{props.title}</h4>
        {props.children}
      </div>
    </div>
  );
};
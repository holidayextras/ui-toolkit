var React = require('react');
var ImageComponent = require('../../../image');

module.exports = function(props) {
  return (
    <div className="ui-component-product-tile">
      <ImageComponent {...props.image} />
      <div className="caption">
        <h4>{props.title}</h4>
        {props.children}
      </div>
    </div>
  );
};

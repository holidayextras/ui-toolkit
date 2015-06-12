var React = require('react');

module.exports = function(props) {
  return (
    <li className="component-icon-list-item">
      <i className={'fa fa-fw fa-' + props.icon} />{props.children}
    </li>
  );
};

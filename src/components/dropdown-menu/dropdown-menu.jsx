'use strict';
const React = require('react');
const ReactDOM = require('react-dom');
const classNames = require('classnames');
const List = require('../list');

class DropdownMenu extends React.Component {

  constructor(props) {
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside(event) {
    if (!this.props.handleClickOutside || ReactDOM.findDOMNode(this).contains(event.target)) return;
    this.props.handleClickOutside(event);
  }

  componentWillMount() {
    document.addEventListener('click', this.handleClickOutside, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, false);
  }

  render() {
    const classes = classNames('component-dropdown-menu', this.props.position)
    return (
      <div className={classes}>
        <List>
          {this.props.children}
        </List>
      </div>
    );
  }

};

DropdownMenu.propTypes = {
  position: React.PropTypes.oneOf(['right', 'left'])
};

DropdownMenu.defaultPropTypes = {
  position: 'left'
};

module.exports = DropdownMenu;

'use strict';
var React = require('react');
var classNames = require('classnames');

class ButtonDropdown extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      open: false
    };

    this.extractChildren();
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  extractChildren() {
    this.props.children.map((child, index) => {
      if (index===0) {
        this.button = React.cloneElement(child, { handleClick: this.handleClick });
        return this.button;
      }
      if (index===1) {
        this.menu = React.cloneElement(child, { handleClickOutside: this.handleClick, type: 'unordered' });
        return this.menu;
      }
    });
  }

  render() {
    return (
      <div className="component-button-dropdown">
        {this.button}
        {this.state.open && this.menu}
      </div>
    );
  }

};

ButtonDropdown.propTypes = {
  children: React.PropTypes.any
};

module.exports = ButtonDropdown;

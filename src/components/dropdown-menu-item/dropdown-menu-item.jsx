'use strict';
const React = require('react');
const ReactDOM = require('react-dom');
const ListItem = require('../list-item');
const Anchor = require('../anchor');

const DropdownMenuItem = (props) => (
  <div className="component-dropdown-menu-item">
    <ListItem>
      <Anchor {...props} />
    </ListItem>
  </div>
);

module.exports = DropdownMenuItem;

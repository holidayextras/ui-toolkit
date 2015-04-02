'use strict';

var React = require('react');

var PageHeader = require('./PageHeader.jsx');
var PageFooter = require('./PageFooter.jsx');
var packageJSON = require('../../package.json');

var CustomComponent = require('./CustomComponent.jsx');
var fs = require('fs');

var HomePage = React.createClass({
  render: function () {
    return (
      <div>

        <div className="jumbotron">
          <div className="container">
            <div className="logo"></div>
            <p className="lead">{packageJSON.description}</p>
          </div>
        </div>

        <div className="container">
          <h1 id="button" className="page-header">HX Button</h1>
          <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/Button.js', 'utf8')} />
        </div>
        <PageFooter />
      </div>
    );
  }
});

module.exports = HomePage;

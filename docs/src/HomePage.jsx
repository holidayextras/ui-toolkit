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

        <main className="bs-docs-masthead" id="content" role="main">
          <div className="container">
            <span className="bs-docs-booticon bs-docs-booticon-lg bs-docs-booticon-outline"></span>
            <p className="lead">{packageJSON.description}</p>
          </div>
        </main>

        <div className="container bs-docs-container ">
          <div className="row">
            <div className="col-md-12" role="main">
              <div className="bs-docs-section">
                <h2 id="setup" className="page-header">UI Toolkit</h2>
                <p className="lead">Bootstrap &amp; Custom React JS Components</p>
              </div>
              <div className="bs-docs-section">
                <h1 id="button" className="page-header">HX Button</h1>
                <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/Button.js', 'utf8')} />
              </div>
            </div>
          </div>
        </div>
        <PageFooter />
      </div>
    );
  }
});

module.exports = HomePage;

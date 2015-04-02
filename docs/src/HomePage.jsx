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

        <header>
          <div className="container">
            <img src="./assets/toolkit-logo.svg" alt="Toolkit" />
            <h1>{packageJSON.description}</h1>
          </div>
        </header>
        <div className="container">
          <p className="lead">This UI toolkit comprises of extensions we feel are necessary to make bootstrap better</p>
          
          <h2 id="button" className="page-header">Ultimate Button</h2>
          <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/Button.jsx', 'utf8')} />

          <h2 id="badge" className="page-header">Bootstrap badge</h2>
          <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/BootstrapBadge.jsx', 'utf8')} />
        </div>
        <PageFooter />
      </div>
    );
  }
});

module.exports = HomePage;

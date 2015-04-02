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
            <p className="lead">A CSS Framework and a Set of React Components that extend from Bootstrap</p>
          </div>
        </header>
        <div className="container">
          <section>
            <h2 className="page-header">Getting started</h2>
          </section>
          <section className=""> 
            <h2 className="page-header">Components</h2>    
            <h3 id="button">Ultimate Button</h3>
            <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/Button.jsx', 'utf8')} />

            <h3 id="badge">Bootstrap badge</h3>
            <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/BootstrapBadge.jsx', 'utf8')} />
          </section>
        </div>
        <PageFooter />
      </div>
    );
  }
});

module.exports = HomePage;

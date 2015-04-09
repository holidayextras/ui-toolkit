var React = require('react');

var packageJSON = require('../../package.json');

var PageHeader = React.createClass({
  render: function () {
    return (
      <header>
        <div className="container">
          <img src="./assets/toolkit-logo.svg" alt="Toolkit" />
          <h1>{packageJSON.description}</h1>
          <p className="lead">A CSS framework and a set of React components that are built on top of Bootstrap</p>
        </div>
      </header>
    );
  }
});

module.exports = PageHeader;

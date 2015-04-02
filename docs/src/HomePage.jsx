var React = require('react');

var PageHeader = require('./PageHeader.jsx');
var GettingStarted = require('./GettingStarted.jsx');
var Components = require('./Components.jsx');
var PageFooter = require('./PageFooter.jsx');
var packageJSON = require('../../package.json');

var HomePage = React.createClass({
  render: function () {
    return (
      <div>
        <PageHeader />
        <div className="container">
          <GettingStarted />
          <Components />
        </div>
        <PageFooter />
      </div>
    );
  }
});

module.exports = HomePage;

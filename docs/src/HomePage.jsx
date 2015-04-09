var React = require('react');

var PageHeader = require('./PageHeader.jsx');
var GettingStarted = require('./GettingStarted.jsx');
var Components = require('./Components.jsx');
var Nav = require('./Nav.jsx');
var PageFooter = require('./PageFooter.jsx');

var HomePage = React.createClass({
  render: function () {
    return (
      <div>
        <PageHeader />
        <div className="container">
          <div className="col-xs-12 col-md-9">
            <GettingStarted />
            <Components />
          </div>
          <div className="col-xs-12 col-md-3">
            <Nav />
          </div>
        </div>
        <PageFooter />
      </div>
    );
  }
});

module.exports = HomePage;

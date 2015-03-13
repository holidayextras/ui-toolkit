'use strict';

var React = require('react');
var packageJSON = require('../../package.json');

var PageHeader = React.createClass({
  render: function () {
    return (
        <footer className="bs-docs-footer" role="contentinfo">
          <div className="container">
            <ul className="bs-docs-footer-links muted">
              <li>Currently v{packageJSON.version }</li>
              <li>·</li>
              <li><a href={ packageJSON.homepage }>GitHub</a></li>
              <li>·</li>
              <li><a href={ packageJSON.homepage + '/issues?state=open' }>Issues</a></li>
              <li>·</li>
              <li><a href={ packageJSON.homepage + '/releases' }>Releases</a></li>
            </ul>
          </div>
        </footer>
      );
  }
});

module.exports = PageHeader;
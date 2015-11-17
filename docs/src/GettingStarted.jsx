var React = require('react');

var GettingStarted = React.createClass({
  render: function () {
    return (
      <section>
        <h2 id="setup" className="page-header">Get started</h2>
        <p>You can install UI Toolkit using <a href="https://www.npmjs.com/" alt="npm">npm</a> or alternatively download or contribute to the project on <a href="https://github.com/holidayextras/ui-toolkit" title="UI Toolkit on GitHub">GitHub</a></p>
        <h3 id="terminal">Terminal</h3>
        <div className="highlight">
          <pre>
            <code className="shell">{'$ npm install --save holidayextras/ui-toolkit\n'}</code>
          </pre>
        </div>

        <h3 id="usage">Sample Usage</h3>
        <p>You can then use <a href="#components">UI Toolkit's Custom Components</a> via:</p>
        <div className="highlight">
          <pre>
            <code className="js">{'var Button = require(\'ui-toolkit\').Button;'}</code>
          </pre>
        </div>
      </section>
    );
  }
});

module.exports = GettingStarted;

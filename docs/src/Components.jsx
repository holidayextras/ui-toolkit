var React = require('react');
var fs = require('fs');

var CustomComponent = require('./CustomComponent.jsx');

var Components = React.createClass({
  render: function () {
    return (
      <section id="components" className="">
        <h2 className="page-header">Components</h2>
        <h3 id="button">Ultimate Button</h3>
        <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/Button.jsx', 'utf8')} />

        <h3 id="badge">Bootstrap badge</h3>
        <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/BootstrapBadge.jsx', 'utf8')} />
      </section>
    );
  }
});

module.exports = Components;

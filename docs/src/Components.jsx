var React = require('react');
var fs = require('fs');

var CustomComponent = require('./CustomComponent.jsx');

var Components = React.createClass({
  render: function () {
    return (
      <section id="components" className="col-xs-12 col-md-9">
        <h2 className="page-header">Components</h2>
        <article>
          <h3 id="button">Ultimate Button</h3>
          <p>The ulimate button should be used as the highest button in the hierarchical structure of your page.</p>
          <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/Button.jsx', 'utf8')} />
        </article>
      </section>
    );
  }
});

module.exports = Components;

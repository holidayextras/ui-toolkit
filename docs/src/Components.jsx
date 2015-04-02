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
          <p>The ulimate button should be used as the highest button in the hirerachical structure of your page</p>
          <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/Button.jsx', 'utf8')} />
        </article>

        <article>
          <h3 id="badge">Bootstrap badge</h3>
          <p>Easily highlight new or unread items by adding a badge to links, navs, and more.</p>
          <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/BootstrapBadge.jsx', 'utf8')} />
        </article>

        <article>
          <h3 id="flag">Flag</h3>
          <p>Flags are used to highlight taxonomy terms or 'tags' on elements. For example 'special offer' or 'limited time only'</p>
        </article>
      </section>
    );
  }
});

module.exports = Components;

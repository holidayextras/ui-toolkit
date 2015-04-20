var React = require('react');
var fs = require('fs');

var CustomComponent = require('./CustomComponent.jsx');

var Components = React.createClass({
  render: function () {
    return (
      <section id="components">
        <h2 className="page-header">Components</h2>
        <article>
          <h3 id="button">Ultimate Button</h3>
          <p>The ulimate button should be used as the highest button in the hierarchical structure of your page.</p>
          <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/Button.jsx', 'utf8')} />
        </article>

        <article>
          <h3 id="flags">Flags</h3>
          <p>Flags are used to highlight taxonomy terms or 'tags' on elements. For example 'special offer' or 'limited time only'</p>
          <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/Flag.jsx', 'utf8')} />
          <h4>Size</h4>
          <p>Fancy larger or smaller flags? Add <code>small</code>, <code>medium</code> or <code>large</code> for additional sizes.</p>
          <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/FlagSize.jsx', 'utf8')} />
          <h4>Position</h4>
          <p>Need to position your flag? You can position the flag anywhere in a container using <code>top</code> (default), <code>bottom</code>, <code>left</code> or <code>right</code>.</p>
          <p>The container must have a <code>relative:position</code> and a <code>z-index:x</code> applied.</p>
          <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/FlagPosition.jsx', 'utf8')} />
        </article>

        <article>
          <h3 id="tile">Tile</h3>
          <p>A tile for displaying an image with a title. The width of a tile is 100% of a container.</p>
          <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/Tile.jsx', 'utf8')} />
          <h4>Attributes</h4>
          <ul>
            <li><code>image</code> Object - Containing <code>src</code> and <code>alt</code> keys</li>
            <li><code>title</code> String - The title of the tile</li>
          </ul>
        </article>
      </section>
    );
  }
});

module.exports = Components;

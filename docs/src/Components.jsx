var React = require('react');
var fs = require('fs');

var CustomComponent = require('./CustomComponent.jsx');

var Components = React.createClass({
  render: function () {
    return (
      <section id="components">
        <h2 className="page-header">Components</h2>
        <article>
          <h3 id="button">Buttons</h3>
          <p>A clickable/tappable button element</p>
          <p>To give the button a purpose, add <code>purpose="primary"</code> etc.</p>
          <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/Button.jsx', 'utf8')} />
          <h4>Size</h4>
          <p>Fancy larger or smaller buttons? Add <code>size="small"</code>, <code>size="large"</code>, or <code>size="extra-large"</code> for additional sizes.</p>
          <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/ButtonSize.jsx', 'utf8')} />
          <h4>Block</h4>
          <p>Create block level buttons by adding <code>size='block'</code>.</p>
          <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/ButtonBlock.jsx', 'utf8')} />

        </article>

        <article>
          <h3 id="flags">Flags</h3>
          <p>Flags are used to highlight taxonomy terms or 'tags' on elements. For example 'special offer' or 'limited time only'</p>
          <p>To give the flag a purpose, add <code>purpose="primary"</code> etc.</p>
          <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/Flag.jsx', 'utf8')} />
          <h4>Size</h4>
          <p>Fancy larger or smaller flags? Add <code>size="small"</code>, <code>size="large"</code> or <code>size="extra-large"</code> for additional sizes.</p>
          <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/FlagSize.jsx', 'utf8')} />
          <h4>Position</h4>
          <p>Need to position your flag? You can position the flag anywhere in a container using <code>position="top"</code> (default), <code>position="bottom"</code>, <code>position="left"</code> or <code>position="right"</code>.</p>
          <p>The container must have a <code>relative:position</code> and a <code>z-index:x</code> applied.</p>
          <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/FlagPosition.jsx', 'utf8')} />
        </article>

        <article>
          <h3 id="rating">Rating</h3>
          <p>Ratings can be used to display a series of icons intended to represent a score.</p>
          <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/Rating.jsx', 'utf8')} />
          <h4>Attributes</h4>
          <ul>
            <li><code>rating</code> Number - The count of positive icons to display.</li>
            <li><code>outOf</code> [optional] Number - The total count the rating value is out of.</li>
            <li><code>blankIcon</code> [optional] Node (any displayable item) - the icon to display for empty ratings.</li>
          </ul>

          The <code>outOf</code> and <code>blankIcon</code> attributes are optional and dependent upon each other.
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

        <article>
          <h3 id="image">Image</h3>
          <p>A standard Image Component.</p>
          <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/Image.jsx', 'utf8')} />
          <h4>Attributes</h4>
          <ul>
            <li><code>src</code> String - Image src attribute</li>
            <li><code>alt</code> String - Image alt attribute</li>
          </ul>
        </article>

        <article>
          <h3 id="credit_card_number">Credit Card Number</h3>
          <p>Masked Credit Card Number input</p>
          <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/CreditCardNumber.jsx', 'utf8')} />
          <h4>Attributes</h4>
          <ul>
            <li><code>accepted</code> Array - Cards to accept ( 'amex', 'discover', 'mastercard' &amp; 'visa' ) .</li>
            <li><code>formatInput</code> Boolean - ( default false ) Whether to Format Input for easier reading</li>
            <li><code>showImages</code> Boolean - ( default false ) Whether to show Credit Card Images</li>
            <li><code>defaultValue</code> String - ( default empty ) Initial Value of Credit Card Number</li>
            <li><code>name</code> String - ( default 'credit-card-number' ) Name of Input</li>
            <li><code>id</code> String - ( default 'credit-card-number' ) ID for Input</li>
          </ul>
          <h4>Sample Cards</h4>
          <ul>
            <li><code>4485148248332663</code> Visa</li>
            <li><code>5330757227258832</code> Mastercard</li>
            <li><code>375669917200734</code> American Express ( not "accepted" for demo )</li>
            <li><code>6011948151581455</code> Discover ( not "accepted" for demo )</li>
          </ul>

        </article>

      </section>
    );
  }
});

module.exports = Components;

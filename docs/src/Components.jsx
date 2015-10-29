var React = require('react');
var fs = require('fs');

var CustomComponent = require('./CustomComponent.jsx');

var Components = React.createClass({
  render: function () {
    return (
      <main role="main">
        <section id="atoms">
          <h2 className="page-header">Atoms</h2>
          <p>Atoms are the basic building blocks of matter. Applied to web interfaces, atoms are our HTML tags, such as a form label, an input or a button.</p>

          <article id="anchor">
            <h3>Anchor</h3>
            <p>The Anchor defines a hyperlink to a location on the same page or any other page on the Web</p>
            <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/Anchor.jsx', 'utf8')} />
            <h4>Attributes</h4>
            <ul>
              <li><code>data</code> Object - Where <code>keys</code> will be data attributes and <code>values</code> will be their values (uses <a href="https://github.com/holidayextras/react-data-attributes-mixin" alt="React Data Attributes Mixin">React Data Attributes Mixin</a>)</li>
              <li><code>handleClick</code> Function - handle click events on the anchor</li>
              <li><code>href</code> String - The location you want to anchor to</li>
              <li><code>target</code> String - This attribute specifies where to display the linked resource. Can be <code>_self</code>, <code>_blank</code>, <code>_parent</code> or <code>_top</code></li>
              <li><code>title</code> String - A well worded title for the anchor</li>
            </ul>
          </article>

          <article id="button">
            <h3>Buttons</h3>
            <p>A clickable/tappable button element</p>
            <p>To give the button a purpose, add <code>purpose</code> etc.</p>
            <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/Button.jsx', 'utf8')} />
            <h4>Size</h4>
            <p>Fancy larger or smaller buttons? Add <code>size</code> for additional sizes.</p>
            <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/ButtonSize.jsx', 'utf8')} />
            <h4>Block</h4>
            <p>Create block level buttons by adding</p>
            <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/ButtonBlock.jsx', 'utf8')} />
            <h4>Attributes</h4>
            <ul>
              <li><code>data</code> Object - Where <code>keys</code> will be data attributes and <code>values</code> will be their values (uses <a href="https://github.com/holidayextras/react-data-attributes-mixin" alt="React Data Attributes Mixin">React Data Attributes Mixin</a>)</li>
              <li><code>disabled</code> Boolean - Determines the state of the button</li>
              <li><code>href</code> String - If an href is passed to a button, it changes to an anchor with button styling</li>
              <li><code>purpose</code> String - default, primary, secondary, success, info, warning, danger</li>
              <li><code>size</code> String - small, medium (default), large, extra-large, block</li>
              <li><code>target</code> String - Standard html traget attribute</li>
            </ul>
          </article>

          <article id="flags">
            <h3>Flags</h3>
            <p>Flags are used to highlight taxonomy terms or 'tags' on elements. For example 'special offer' or 'limited time only'</p>
            <p>To give the flag a purpose, add <code>purpose</code> etc.</p>
            <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/Flag.jsx', 'utf8')} />
            <h4>Size</h4>
            <p>Fancy larger or smaller flags? Add <code>size</code> for additional sizes.</p>
            <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/FlagSize.jsx', 'utf8')} />
            <h4>Position</h4>
            <p>Need to position your flag? You can position the flag anywhere in a container using <code>position</code></p>
            <p>The container must have a <code>relative:position</code> and a <code>z-index:x</code> applied.</p>
            <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/FlagPosition.jsx', 'utf8')} />
            <h4>Attributes</h4>
            <ul>
              <li><code>position</code> String - top (default), bottom, left, right</li>
              <li><code>purpose</code> String - default, primary, secondary, success, info, warning, danger</li>
              <li><code>size</code> String - small, medium (default), large, extra-large</li>
            </ul>
          </article>

          <article id="icons">
            <h3>Icons</h3>
            <p>Icons are provided to add visual aid to elements on your website. Use independently, as part of a list, the world is your oyster (though there is no oyster icon).</p>
            <p>The default font library we use is <a href="https://fortawesome.github.io/Font-Awesome/" alt="Font Awesome">Font Awesome</a> but you can also use Bootstraps <a href="http://getbootstrap.com/components/#glyphicons" alt="Glyphicons">Glyphicons</a>. You will need to load the CSS for each of these libraries separately, UI Toolkit doesn't include these be default.</p>
            <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/Icon.jsx', 'utf8')} />
            <h4>Attributes</h4>
            <ul>
              <li><code>icon</code> String - The name of the icon you want to display.</li>
              <li><code>iconFamily</code> String - <code>font-awesome</code> or <code>glyphicons</code></li>
            </ul>
          </article>

          <article id="image">
            <h3>Image</h3>
            <p>A standard Image Component which is set at 100% width by default to ensure the image works responsively.</p>
            <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/Image.jsx', 'utf8')} />
            <h4>Responsive Image</h4>
            <p>This component also utilises the <code>srcset</code> attribute, which helps if you are implementing responsive images (different images in HTML for different situations) and all you are doing is switching between different versions of the same image (the vast majority of usage). Historically for high resolution (2x) desktop screens we often use high-res, large dimension images. For smaller screens this means downloading a large file when not necessary. For more information visit <a href="https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/" title="CSS Tricks guide to srcset">CSS Tricks</a>.</p>
            <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/ImageResponsive.jsx', 'utf8')} />
            <h4>Attributes</h4>
            <ul>
              <li><code>alt</code> String - Image alt attribute</li>
              <li><code>handleClick</code> Function - handle click events on the image</li>
              <li><code>src</code> String - Image src attribute</li>
              <li><code>href</code> String - an href that wraps the image in an anchor</li>
              <li><code>data</code> Object - Where <code>keys</code> will be data attributes and <code>values</code> will be their values (uses <a href="https://github.com/holidayextras/react-data-attributes-mixin" alt="React Data Attributes Mixin">React Data Attributes Mixin</a>)</li>
              <li><code>srcset</code> String - a comma separated list of images and their file size, perfect for responsive images</li>
              <li><code>sizes</code> String (optional) - A rough start size for your image. To be used in conjunction with srcset when implementing responsive images. Please note that this is an optimisation only and its default is set to <code>100vw</code></li>
            </ul>
          </article>

          <article id="input">
            <h3>Input</h3>
            <p>Custom Input for Text, Email, Telephone &amp; Number Types</p>
            <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/Input.jsx', 'utf8')} />
            <h4>Attributes</h4>
            <ul>
              <li><code>type</code> String - Type of Input Field can be <code>text</code>, <code>email</code>, <code>tel</code> or <code>number</code></li>
              <li><code>name</code> String - Optional Name for Input Field</li>
              <li><code>id</code> String - Optional ID for Input Field</li>
              <li><code>label</code> String - Optional Label in front of Input Field</li>
              <li><code>placeHolder</code> String - Optional Placeholder for Input Field</li>
              <li><code>validator</code> String - Optional Regular Expression to Validate Input</li>
              <li><code>errorMessage</code> String - Optional Error Message to show if <code>validator</code> returns false</li>
              <li><code>disabled</code> Boolean - Whether to Disable the Input Field</li>
              <li><code>readOnly</code> Boolean - Whether to set the Input Field to Read Only</li>
              <li><code>required</code> Boolean - Whether to set the Input Field to be Required</li>
              <li><code>handleChange</code> Function - Optional Function which is called onChange</li>
            </ul>
          </article>

          <article id="lists">
            <h3>Lists</h3>
            <p>There are 3 types of list <code>ordered</code>, <code>unordered</code> and <code>description</code></p>

            <h4 id="unordered-list">Unordered list</h4>
            <p>An unordered list is a list in which the sequence of items is not important.</p>
            <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/UnorderedList.jsx', 'utf8')} />

            <h4 id="ordered-list">Ordered list</h4>
            <p>An ordered list is a list in which the sequence of items is important.</p>
            <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/OrderedList.jsx', 'utf8')} />

            <h4 id="description-list">Description list</h4>
            <p>A number of connected items or names written or printed consecutively, typically one below the other.</p>
            <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/DescriptionList.jsx', 'utf8')} />

            <h4>Attributes</h4>
            <ul>
              <li><code>type</code> String - <code>ordered</code>,<code>unordered</code> and <code>description</code></li>
            </ul>

            <h4>Child Components</h4>
            <ul>
              <li><code>listItem</code> Component - A item of a list. Must be used with an <a href="#ordered-list" alt="ordered-list">ordered-list</a> or <a href="#unordered-list" alt="unordered-list">ordered-list</a></li>
              <li><code>listTerm</code> Component - A list term of a description list. Must be used as a child of a <a href="#description-list" alt="definition-list">definition-list</a></li>
              <li><code>listDescription</code> Component - A desciption of the term of a description list. Must be used as a child of a <a href="#definition-list" alt="definition-list">definition-list</a></li>
            </ul>
          </article>

          <article id="lozenge">
            <h3>Lozenge</h3>
            <p>A small pill shaped item for displaying information</p>
            <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/Lozenge.jsx', 'utf8')} />
            <h4>Attributes</h4>
            <ul>
              <li><code>purpose</code> String - default, primary, secondary, success, info, warning, danger</li>
              <li><code>size</code> String - small, medium (default), large, extra-large, block</li>
              <li><code>tip</code> String - Tooltip text to display</li>
            </ul>
          </article>

          <article id="quote">
            <h3>Quote</h3>
            <p>A quote is used referencing blocks of content from another source within your document. They come as a <code>Block</code> (default) or <code>inline</code></p>
            <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/Quote.jsx', 'utf8')} />
            <h4>Inline</h4>
            <p>Inline quotes are for referencing something inline within a section of prose</p>
            <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/QuoteInline.jsx', 'utf8')} />
            <h4>Attributes</h4>
            <ul>
              <li><code>author</code> String - The author of the quote</li>
              <li><code>cite</code> String - cited title of a work; for example, the title of a book mentioned within the main text flow of a document</li>
              <li><code>purpose</code> String - default, primary, secondary, success, info, warning, danger</li>
              <li><code>role</code> String - The role/job title of the author</li>
              <li><code>size</code> String - small, medium (default), large, extra-large</li>
              <li><code>type</code> String - Block (default) or Inline</li>
            </ul>
          </article>
        </section>

        <section id="molecules">
          <h2 className="page-header">Molecules</h2>
          <p>Things start getting more interesting and tangible when we start combining atoms together. Molecules are groups of atoms bonded together and are the smallest fundamental units of a compound. These molecules take on their own properties and serve as the backbone of our design systems.</p>

          <article id="alert">
            <h3>Alert</h3>
            <p>An alert is used to display helpful or factual information usually used as a prompt.</p>
            <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/Alert.jsx', 'utf8')} />
            <h4>Attributes</h4>
            <ul>
              <li><code>purpose</code> String - default, primary, secondary, success, info, warning, danger</li>
              <li><code>size</code> String - small, medium (default), large, extra-large</li>
              <li><code>title</code> String - The title of the alert</li>
            </ul>
          </article>

          <article id="basket-item">
            <h3>Basket Item</h3>
            <p>You can use the basket item as a way of representing anything with a price next to it. This means you could have a simple description (line of text) or even more complex markup passed in as the child.</p>
            <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/BasketItem.jsx', 'utf8')} />
            <h4>Attributes</h4>
            <ul>
              <li><code>currency</code> [optional] String - A currency symbol to display beside the price.</li>
              <li><code>price</code> [optional] Number - The price to display along side the basket item.</li>
            </ul>
          </article>

          <article id="countdown">
            <h3>Countdown</h3>
            <p>Countdowns allow you to find the time difference between the current date and a date in the future. To do this you pass in a <code>until</code> value of any date format.</p>
            <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/Countdown.jsx', 'utf8')} />
            <h4>Attributes</h4>
            <ul>
              <li><code>until</code> String - Date in the future</li>
            </ul>
          </article>

          <article id="icon-list">
            <h3>Icon List</h3>
            <p>An icon list is an unordered list with bullets consisting of icons. You must still use list-items as children, but include an <a href="#icons">Icon</a> component as well.</p>
            <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/IconList.jsx', 'utf8')} />
          </article>

          <article id="payment-card">
            <h3>Payment Cards</h3>
            <p>Easily display what payment cards your website accepts</p>
            <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/PaymentCard.jsx', 'utf8')} />
            <h4>Attributes</h4>
            <ul>
              <li><code>type</code></li> String - <code>amazon amex apple cirrus delta directdebit discover electron google maestro mastercard paym paypal sage sepa solo switch ukash visa visadebit westernunion</code>
            </ul>
          </article>

          <article>
            <h3 id="rating">Rating</h3>
            <p>Ratings can be used to display a series of icons intended to represent a score.</p>
            <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/Rating.jsx', 'utf8')} />
            <h4>Attributes</h4>
            <ul>
              <li><code>blankIcon</code> [optional] Node (any displayable item) - the icon to display for empty ratings.</li>
              <li><code>outOf</code> [optional] Number - The total count the rating value is out of.</li>
              <li><code>rating</code> Number - The count of positive icons to display.</li>
            </ul>

            The <code>outOf</code> and <code>blankIcon</code> attributes are optional and dependent upon each other.
          </article>

          <article id="tile">
            <h3>Tile</h3>
            <p>A tile for displaying an image with a title. The width of a tile is 100% of a container.</p>
            <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/Tile.jsx', 'utf8')} />
            <h4>Attributes</h4>
            <ul>
              <li><code>image</code> Object - Containing <code>src</code> and <code>alt</code> keys</li>
              <li><code>title</code> String - The title of the tile</li>
            </ul>
          </article>

          <article id="weather">
            <h3>Weather</h3>
            <p>Display weather information in a standard format. Combine a few of these components to create weather patterns i.e a 5 day forecast</p>
            <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/Weather.jsx', 'utf8')} />
            <h4>Attributes</h4>
            <ul>
              <li><code>weather</code> String - The type of weather that is occuring. Can be <code>cloudy</code>, <code>fog</code>, <code>hail</code>, <code>heavy-rain</code>, <code>heavy-snow</code>, <code>light-rain</code>, <code>light-snow</code>, <code>night-clear</code>, <code>night-partly-cloudy</code>, <code>partly-cloudy</code>, <code>storm</code>, <code>sunny</code> or <code>windy</code> (more to come)</li>
              <li><code>temperature</code> Number - The current temperature</li>
              <li><code>unit</code> String - The unit of measurement for temperature <code>C</code> (Celsius), <code>F</code> (Fahrenheit), <code>K</code> (Kelvin) or <code>R</code> (Rankine)</li>
              <li><code>date</code> String - The date of the weather you want displayed passed in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601</a> format</li>
              <li><code>format</code> String - Date format required i.e <code>dddd</code>, <code>HH:mm</code> (default) etc</li>
            </ul>
            <small>We currently use a small sample of <a href="http://www.alessioatzeni.com/meteocons/" title="Meteocons">Meteocons</a></small>
          </article>

          <article id="stepper">
            <h3>Stepper</h3>
            <p>Display an input with a number value that is surrounded by decrement and increment buttons</p>
            <CustomComponent codeText={fs.readFileSync(__dirname + '/../examples/Stepper.jsx', 'utf8')} />
            <h4>Attributes</h4>
            <ul>
              <li><code>value</code> Number - The value of the stepper</li>
              <li><code>onChange</code> Function - The function to call when the value changes</li>
              <li><code>minValue</code> Number - The minimum value the stepper can decrement to</li>
              <li><code>maxValue</code> Number - The maximum value the stepper can increment to</li>
              <li><code>incrementDisplayString</code> String - The string to display in the decrement button</li>
              <li><code>decrementDisplayString</code> String - The string to display in the increment button</li>
            </ul>
          </article>
        </section>
      </main>
    );
  }
});

module.exports = Components;

var removeAThing = function(thisProduct) {
  alert( 'your implementation will deal with removing: ' + thisProduct );
};

var pretendLightBox = function(thisProduct) {
  alert( 'your implementation will deal making a thing for when you click on: ' + thisProduct );
};

var i18n = {
  "locales": "en-GB",
  "formats": {
    "number": {
      "GBP": {
        "style": "currency",
        "currency": "GBP",
        "minimumFractionDigits": 2
      }
    }
 }
};

var example = (
  <div>
    <UIToolkit.IconList>

      <UIToolkit.IconListItem icon="check">
        <UIToolkit.BasketItem {...i18n} title="First product">
          This is a fantastic product that is really really cool with no price.
        </UIToolkit.BasketItem>
      </UIToolkit.IconListItem>

      <UIToolkit.IconListItem icon="check">
        <UIToolkit.BasketItem {...i18n} title="Second product (click me)" toggleDescription={true} price={100}>
          This one has a hidden description.
        </UIToolkit.BasketItem>
      </UIToolkit.IconListItem>

      <UIToolkit.IconListItem icon="check">
        <UIToolkit.BasketItem {...i18n} title="Third product" handleRemove={removeAThing.bind(null,'3rd product')} price={100}>
          Can be removed
        </UIToolkit.BasketItem>
      </UIToolkit.IconListItem>

      <UIToolkit.IconListItem icon="check">
        <UIToolkit.BasketItem {...i18n} title={<a onClick={pretendLightBox.bind(null, '4th product')}>Fourth Product</a>} handleRemove={removeAThing.bind(null,'4th product')} price={100}>
          Has a special title (could open a lightbox or something?)
        </UIToolkit.BasketItem>
      </UIToolkit.IconListItem>

      <UIToolkit.IconListItem icon="check">
        <UIToolkit.BasketItem {...i18n} title={<a onClick={pretendLightBox.bind(null, '5th product')}>Fifth Product (no description)</a>} price={100} />
      </UIToolkit.IconListItem>

      <UIToolkit.IconListItem icon="check">
        <UIToolkit.BasketItem {...i18n} title="Sixth product" price={0}>
          This is the best one of all because it is FREE!
        </UIToolkit.BasketItem>
      </UIToolkit.IconListItem>

    </UIToolkit.IconList>
    <hr />
    <UIToolkit.BasketItem {...i18n} title="Total (also a BasketItem)" price={400} />
  </div>
);

React.render(example, mountNode);

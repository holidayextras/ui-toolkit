var removeAThing = function(thisProduct) {
  alert( 'your implementation will deal with removing: ' + thisProduct );
};

var pretendLightBox = function(thisProduct) {
  alert( 'your implementation will deal making a thing for when you click on: ' + thisProduct );
};

var example = (
  <div>
    <UIToolkit.List type="icon">

      <UIToolkit.ListItem>
        <UIToolkit.Icon icon="check" iconFamily="font-awesome" />
        <UIToolkit.BasketItem title="First product">
          This is a fantastic product that is really really cool with no price.
        </UIToolkit.BasketItem>
      </UIToolkit.ListItem>

      <UIToolkit.ListItem>
        <UIToolkit.Icon icon="check" iconFamily="font-awesome" />
        <UIToolkit.BasketItem title="Second product (click me)" toggleDescription={true} price={100}>
          This one has a hidden description.
        </UIToolkit.BasketItem>
      </UIToolkit.ListItem>

      <UIToolkit.ListItem>
        <UIToolkit.Icon icon="check" iconFamily="font-awesome" />
        <UIToolkit.BasketItem title="Third product" handleRemove={removeAThing.bind(null,'3rd product')} price={100}>
          Can be removed
        </UIToolkit.BasketItem>
      </UIToolkit.ListItem>

      <UIToolkit.ListItem>
        <UIToolkit.Icon icon="check" iconFamily="font-awesome" />
        <UIToolkit.BasketItem title="4th product" role="link" tabIndex="0" title="Fourth Product" price={100}>
          Has a special title (could open a lightbox or something?)
        </UIToolkit.BasketItem>
      </UIToolkit.ListItem>

      <UIToolkit.ListItem>
        <UIToolkit.Icon icon="check" iconFamily="font-awesome" />
        <UIToolkit.BasketItem title="5th product" role="link" tabIndex="0" title="Fifth Product (no description)" price={100}>
          I am awesome
        </UIToolkit.BasketItem>
      </UIToolkit.ListItem>

      <UIToolkit.ListItem>
        <UIToolkit.Icon icon="check" iconFamily="font-awesome" />
        <UIToolkit.BasketItem title="Sixth product" price={0}>
          This is the best one of all because it is FREE!
        </UIToolkit.BasketItem>
      </UIToolkit.ListItem>

    </UIToolkit.List>
    <hr />
    <UIToolkit.BasketItem title="Total (also a BasketItem)" price={400} />
  </div>
);

ReactDOM.render(example, mountNode);

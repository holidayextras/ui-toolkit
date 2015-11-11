var removeAThing = function(thisProduct) {
  alert( 'your implementation will deal with removing: ' + thisProduct );
};

var pretendLightBox = function(thisProduct) {
  alert( 'your implementation will deal making a thing for when you click on: ' + thisProduct );
};

var example = (
  <div>
    <UIToolkit.List>

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
        <UIToolkit.BasketItem title={<a onClick={pretendLightBox.bind(null, '4th product')}>Fourth Product</a>} handleRemove={removeAThing.bind(null,'4th product')} price={100}>
          Has a special title (could open a lightbox or something?)
        </UIToolkit.BasketItem>
      </UIToolkit.ListItem>

      <UIToolkit.ListItem>
        <UIToolkit.Icon icon="check" iconFamily="font-awesome" />
        <UIToolkit.BasketItem title={<a onClick={pretendLightBox.bind(null, '5th product')}>Fifth Product (no description)</a>} price={100} />
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

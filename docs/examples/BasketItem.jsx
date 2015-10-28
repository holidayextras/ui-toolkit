var example = (
  <div>
    <UIToolkit.BasketItem price={100}>
      <a href="#">First product</a> is a fantastic product that is really really cool.
    </UIToolkit.BasketItem>

    <UIToolkit.BasketItem price={125}>
      <a href="#">Second product</a> also if not better than the first product, bit more pricey.
    </UIToolkit.BasketItem>

    <UIToolkit.BasketItem price={300}>
      <strong>Third product</strong> does not have a link so just a simple text.
    </UIToolkit.BasketItem>

    <UIToolkit.BasketItem>
      <a>Fourth product</a> does not have a price.
    </UIToolkit.BasketItem>

    <UIToolkit.BasketItem price={300}>
      <a>Fifth product</a> has more complex markup.
      <ul>
        <li>one thing</li>
        <li>another thing</li>
        <li>somethign else</li>
      </ul>
    </UIToolkit.BasketItem>

    <UIToolkit.BasketItem price={25}>
      <a>Sixth product</a> went wee wee wee... all the way home.
    </UIToolkit.BasketItem>

    <hr />
    <UIToolkit.BasketItem price={850}>
      <strong>Total:</strong>
    </UIToolkit.BasketItem>
  </div>
);

React.render(example, mountNode);

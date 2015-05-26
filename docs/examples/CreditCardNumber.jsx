var cc = {
  images: true,
  format: true,
  number: '4485148248332663'
};

var example = (
  <UIToolkit.CreditCardNumber
    showImages={cc.images}
    formatInput={cc.format}
    defaultValue={cc.number} />
);

React.render(example, mountNode);

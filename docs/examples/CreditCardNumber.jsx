var cc = {
  images: true,
  format: true,
  number: '4485148248332663',
  label: 'Credit Card: ',
  accepted: ['visa','mastercard']
};

var example = (
  <UIToolkit.CreditCardNumber
    showImages={cc.images}
    formatInput={cc.format}
    defaultValue={cc.number}
    label={cc.label}
    accepted={cc.accepted} />
);

React.render(example, mountNode);

var cc = {
  expires: '04 / 19',
  label: 'Expires: '
};

var example = (
  <UIToolkit.CreditCardExpire defaultValue={cc.expires} label={cc.label} />
);

React.render(example, mountNode);

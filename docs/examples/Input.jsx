var example = (
  <div>
    <UIToolkit.Input type='text' label='Text Only' validator={/^[a-zA-Z ]*$/g} />
    <UIToolkit.Input type='text' label='With Default' >Default Value</UIToolkit.Input>
    <UIToolkit.Input type='text' label='Required' placeholder='Full Name' required={true} />
  </div>
);

React.render(example, mountNode);

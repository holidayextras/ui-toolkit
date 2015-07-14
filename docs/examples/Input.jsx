var example = (
  <div>
    <UIToolkit.Input
      type='text'
      name='full-name'
      label='Name'
      placeholder='Full Name'
      required="yes"
      />
    <UIToolkit.Input
      type='email'
      name='email'
      label='Email'
      placeholder='me@email.com'
      />
    <UIToolkit.Input
      type='tel'
      name='telephone-number'
      label='Tel No'
      placeholder='01234 456789'
      />
  </div>

);

React.render(example, mountNode);

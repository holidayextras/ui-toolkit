var text_validator = /^([a-z]+(-| )?)+$/i;
var text_error_message = 'Invalid Name';

var password_validator = /^(?=.*\d)(?=.*[a-zA-Z])(?!.*[\W_\x7B-\xFF]).{6,15}$/;
var password_error_message = 'Password must be 6-20 characters including at least 1 upper or lower alpha, and 1 digit.';

var email_validator = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
var email_error_message = 'Invalid Email';

var example = (
  <div>
    <UIToolkit.Input
      type='text'
      name='sample_text'
      id='sample_text'
      label='Name: '
      placeholder='Full Name'
      validator={text_validator}
      errorMessage={text_error_message}
      />
    <UIToolkit.Input
      type='email'
      name='sample_email'
      id='sample_email'
      label='Email Address: '
      placeholder='me@email.com'
      validator={email_validator}
      errorMessage={email_error_message}
      />
    <UIToolkit.Input
      type='password'
      name='sample_password'
      id='sample_password'
      label='Password: '
      placeholder='Enter a Password'
      validator={password_validator}
      errorMessage={password_error_message}
      />
  </div>

);

React.render(example, mountNode);

console.log('x')
var ButtonGroup = (
  <UIToolkit.ButtonGroup buttonText="Hello" options={[{name: 'name'}]} handleClick={ function() { alert('Welcome'); }} purpose="success" size="large" />
);
ReactDOM.render(ButtonGroup, mountNode);

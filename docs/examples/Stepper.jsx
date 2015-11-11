var example = (
  <div>
    <UIToolkit.Stepper value={2} minValue={1} maxValue={9} onChange={function() { alert('changed'); }} />
  </div>
);
ReactDOM.render(example, mountNode);
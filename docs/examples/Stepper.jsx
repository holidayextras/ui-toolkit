var example = (
  <div>
    <UIToolkit.Stepper label="number of passengers" value={2} minValue={1} maxValue={9} onChange={function() { alert('changed'); }} />
  </div>
);

ReactDOM.render(example, mountNode);

var example = (
  <div>
    <UIToolkit.Stepper label="number of passengers" value={2} minValue={1} maxValue={9} id="stepper-example" onChange={function() { alert('changed'); }} />
    <UIToolkit.Stepper label="Time of travel" value={1500} minValue={100} maxValue={2300} id="stepper-example" stepValue={100} valueText="3pm" onChange={function() { alert('changed'); }} />
  </div>
);

ReactDOM.render(example, mountNode);

var example = (
  <div>
    <UIToolkit.Stepper value={2}/>
    <br/>
    <UIToolkit.Stepper value={2} minValue={0} maxValue={5}/>
  </div>
);
React.render(example, mountNode);
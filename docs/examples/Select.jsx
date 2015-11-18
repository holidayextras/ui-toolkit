var example = (
  <div>
    <UIToolkit.Select label='Destination'>
      <option>Germany</option>
      <option>Spain</option>
      <option>Portugal</option>
      <option>England</option>
      <option>Scotland</option>
    </UIToolkit.Select>
    <UIToolkit.Select label='Multiple' multiple={true}>
      <option>Germany</option>
      <option>Spain</option>
      <option>Portugal</option>
      <option>England</option>
      <option>Scotland</option>
    </UIToolkit.Select>
  </div>
);

ReactDOM.render(example, mountNode);

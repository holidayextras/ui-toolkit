var example = (
  <UIToolkit.ButtonGroup>
    <UIToolkit.Button>Hello</UIToolkit.Button>
    <UIToolkit.Button>
      <UIToolkit.Icon icon="caret-up"/>
    </UIToolkit.Button>
    <UIToolkit.List type="unordered">
      <UIToolkit.ListItem>List 1</UIToolkit.ListItem>
      <UIToolkit.ListItem>List 2</UIToolkit.ListItem>
      <UIToolkit.ListItem>List 3</UIToolkit.ListItem>
    </UIToolkit.List>
  </UIToolkit.ButtonGroup>

);
ReactDOM.render(example, mountNode);

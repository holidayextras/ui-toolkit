var example = (
  <UIToolkit.ButtonDropdown>
    <UIToolkit.Button>Hello</UIToolkit.Button>
    <UIToolkit.Button handleClick={function() {document.getElementsByClassName('component-unordered-list')[1].classList.toggle("visible");}}>
      <UIToolkit.Icon icon="caret-down"/>
    </UIToolkit.Button>
    <UIToolkit.List type="unordered">
      <UIToolkit.ListItem>List 1</UIToolkit.ListItem>
      <UIToolkit.ListItem>List 2</UIToolkit.ListItem>
      <UIToolkit.ListItem>List 3</UIToolkit.ListItem>
    </UIToolkit.List>
  </UIToolkit.ButtonDropdown>

);
ReactDOM.render(example, mountNode);

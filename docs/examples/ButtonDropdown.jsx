var example = (
  <div>
    <UIToolkit.ButtonDropdown>
      <UIToolkit.Button>
        Dropdown <UIToolkit.Icon icon="caret-down"/>
      </UIToolkit.Button>
      <UIToolkit.DropdownMenu>
        <UIToolkit.DropdownMenuItem>Item 1</UIToolkit.DropdownMenuItem>
        <UIToolkit.DropdownMenuItem>Item 2</UIToolkit.DropdownMenuItem>
        <UIToolkit.DropdownMenuItem>Item 3</UIToolkit.DropdownMenuItem>
      </UIToolkit.DropdownMenu>
    </UIToolkit.ButtonDropdown>
    <UIToolkit.ButtonGroup>
      <UIToolkit.Button>Hello</UIToolkit.Button>
      <UIToolkit.ButtonDropdown>
        <UIToolkit.Button>
          <UIToolkit.Icon icon="caret-down"/>
        </UIToolkit.Button>
        <UIToolkit.DropdownMenu position="right">
          <UIToolkit.DropdownMenuItem>Item 1</UIToolkit.DropdownMenuItem>
          <UIToolkit.DropdownMenuItem>Item 2</UIToolkit.DropdownMenuItem>
          <UIToolkit.DropdownMenuItem>Item 3</UIToolkit.DropdownMenuItem>
        </UIToolkit.DropdownMenu>
      </UIToolkit.ButtonDropdown>
    </UIToolkit.ButtonGroup>
  </div>
);
ReactDOM.render(example, mountNode);

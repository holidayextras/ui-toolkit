var example = (
  <div>
    <UIToolkit.Lozenge tip="default tip">Default</UIToolkit.Lozenge>
    <UIToolkit.Lozenge purpose="primary" tip="primary tip">Primary</UIToolkit.Lozenge>
    <UIToolkit.Lozenge purpose="success" tip="success tip">Success</UIToolkit.Lozenge>
    <UIToolkit.Lozenge purpose="info" tip="info tip">Info</UIToolkit.Lozenge>
    <UIToolkit.Lozenge purpose="warning" tip="warning tip">Warning</UIToolkit.Lozenge>
    <UIToolkit.Lozenge purpose="danger" tip="danger tip">Danger</UIToolkit.Lozenge>
  </div>
);

React.render(example, mountNode);

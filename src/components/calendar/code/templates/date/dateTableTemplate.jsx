module.exports = function(props) {
  var prefixClsFn = props.prefixClsFn;
  return (
    <table className = {prefixClsFn('table')} cellSpacing="0" role="grid">
      <DateTHead {...props}/>
      <DateTBody {...props}/>
    </table>
  );
};

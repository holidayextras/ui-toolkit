var React = require('react');
var DateTHead = require('../../views/date/dateTableHeadView');
var DateTBody = require('../../views/date/dateTableBodyView');

module.exports = function(props) {
  var prefixClsFn = props.prefixClsFn;
  return (
    <table className = {prefixClsFn('table')} cellSpacing="0" role="grid">
      <DateTHead {...props}/>
      <DateTBody {...props}/>
    </table>
  );
};

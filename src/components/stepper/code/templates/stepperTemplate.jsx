'use strict';

var Button = require('../../../button');
var Input = require('../../../input');

module.exports = function(component) {

  return (
    <div className="component-stepper">
      <span className="button-container">
        <Button handleClick={this.decrement} disabled={!this.canDecrement()}>{this.props.decrementDisplayString}</Button>
      </span>
      
      <Input type='text' key={this.state.value} readOnly={true}>{this.state.value.toString()}</Input>

      <span className="button-container">
        <Button handleClick={this.increment} disabled={!this.canIncrement()}>{this.props.incrementDisplayString}</Button>
      </span>
    </div>
  );
};
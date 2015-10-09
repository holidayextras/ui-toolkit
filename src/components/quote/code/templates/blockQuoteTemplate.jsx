'use strict';
var React = require('react');
var classNames = require('classnames');
var getComponentClasses = require('../../../../utils/getComponentClasses');

module.exports = function() {

  var propClasses = ['size', 'purpose', 'type'];
  var classes = getComponentClasses('component-quote', propClasses, this.props);

  return (
      <blockquote className={classNames(classes)} itemScope itemType="http://schema.org/CreativeWork">
        <p itemProp="text">{this.props.children}</p>
        <footer itemProp="author" itemScope itemType="http://schema.org/Person">
          <span itemProp="name">{this.props.author}</span>
          <small itemProp="jobTitle">{this.props.role}</small>
          {(this.props.cite) ? <cite itemProp="citation">{this.props.cite}</cite> : null}
        </footer>
      </blockquote>
  );
};

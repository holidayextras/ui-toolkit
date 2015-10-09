'use strict';
var React = require('react');
var classNames = require('classnames');
var getComponentClasses = require('../../../../utils/getComponentClasses');

module.exports = function() {

  var propClasses = ['size', 'purpose', 'type'];
  var classes = getComponentClasses('component-quote', propClasses, this.props);

  return (
      <q className={classNames(classes)} cite={this.props.cite} itemScope itemType="http://schema.org/CreativeWork" itemProp="text">
        {this.props.children}
        {(this.props.cite) ? <meta itemProp="citation" content={this.props.cite} /> : null}
        <span itemProp="author" itemScope itemType="http://schema.org/Person">
          <meta itemProp="name" content={this.props.author} />
          <meta itemProp="jobTitle" content={this.props.role} />
        </span>
      </q>
  );
};

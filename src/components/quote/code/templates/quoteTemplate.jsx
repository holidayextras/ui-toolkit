var classNames = require('classnames');
var getComponentClasses = require('../../../../utils/getComponentClasses');

module.exports = function() {

  var propClasses = ['size', 'purpose', 'type'];
  var classes = getComponentClasses('component-quote', propClasses, this.props);

  return (
      <q cite={this.props.cite} className={classNames(classes)} itemScope itemType="http://schema.org/CreativeWork" itemProp="text">
        {this.props.children}
        <span itemProp="author" itemScope itemType="http://schema.org/Person">
          <meta itemProp="name" content={this.props.author} />
          <meta itemProp="jobTitle" content={this.props.role} />
        </span>
      </q>
  );
};

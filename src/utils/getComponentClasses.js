var _ = require('underscore');

module.exports = function(defaultClass, propClasses, props) {
  if(!defaultClass || (typeof defaultClass !== 'string')) {
    throw new Error('Invalid default class');
  }

  var classes = [defaultClass];
  if((propClasses && propClasses instanceof Array) && (props && props instanceof Object)) {
    classes = classes.concat(_.values(_.pick(props, propClasses)));
  }

  return classes;
};

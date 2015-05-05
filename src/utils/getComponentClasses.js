var _ = require('underscore');

module.exports = function(defaultClass, propClasses, props) {
  if(!defaultClass || (typeof defaultClass !== 'string')) {
    throw new Error('no default class provided');
  }

  var classes = [defaultClass];
  if(propClasses && props) {
    classes = classes.concat(_.values(_.pick(props, propClasses)));
  }

  return classes;
};
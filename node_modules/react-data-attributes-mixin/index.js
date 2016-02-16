var _ = {
  mapKeys: require('lodash.mapkeys'),
  kebabCase: require('lodash.kebabcase')
};

module.exports = {
  getDataAttributesFromProps: function() {
    return _.mapKeys(this.props.data, function(value, key) {
       return 'data-' + _.kebabCase(key);
    });
  }
};

const _ = {
  mapKeys: require('lodash/mapKeys'),
  kebabCase: require('lodash/kebabCase')
}

const flatten = (data) => {
  return _.mapKeys(data, (value, key) => 'data-' + _.kebabCase(key))
}

module.exports = {
  flatten
}

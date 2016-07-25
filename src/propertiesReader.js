'use strict';

var sync = require('synchronize');
var properties = require('properties');

var options = {
  variables: true,
  namespaces: true
};

module.exports = function (source) {
  sync(properties, 'parse');
  return properties.parse(source, options);
};

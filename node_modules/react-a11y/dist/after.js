"use strict";

var after = function after(host, name, cb) {
  var originalFn = host[name];

  if (originalFn) {
    host[name] = function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      originalFn.apply(this, args);
      cb.apply(this, args);
    };
  } else {
    host[name] = cb;
  }
};

module.exports = after;
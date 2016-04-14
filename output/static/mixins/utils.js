define('static/mixins/utils', function(require, exports, module) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var utils = {
    checkMobile: function checkMobile(mobile) {
      var numPattern = /^1[34578]\d{9}$/;
      return numPattern.test(mobile);
    },
  
    checkMobileNumber: function checkMobileNumber(number) {
      var numberReg = /^\d{0,11}$/g;
      return numberReg.test(number);
    },
    checkPasword: function checkPasword(passowrd) {
      if (passowrd) {
        return passowrd.length >= 6 && passowrd.length <= 20;
      }
    },
    strlen: function strlen(str) {
      var len = 0;
      for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c >= 0x0001 && c <= 0x007e || 0xff60 <= c && c <= 0xff9f) {
          len++;
        } else {
          len += 2;
        }
      }
      return len;
    }
  };
  
  exports["default"] = utils;
  module.exports = exports["default"];

});

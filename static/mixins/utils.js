var utils = {
  checkMobile: function(mobile){
    var numPattern = /^1[34578]\d{9}$/;
    return numPattern.test(mobile);
  },

  checkMobileNumber: function(number){
    var numberReg = /^\d{0,11}$/g;
    return numberReg.test(number);
  },
  checkPasword: function(passowrd){
    if(passowrd){
      return (passowrd.length >= 6 && passowrd.length <= 20)
    }
  },
  strlen: function(str){
    var len = 0;
    for (var i=0; i<str.length; i++) { 
     var c = str.charCodeAt(i); 
     if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) { 
       len++; 
     } 
     else { 
      len+=2; 
     } 
    } 
    return len;
  }
}

export default utils;
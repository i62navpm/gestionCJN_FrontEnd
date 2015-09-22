(function() {
  'use strict';

  angular
    .module('app')
    .filter('removeNulls', removeNulls);

  function removeNulls(){
    return function(obj){
      var isArray = obj instanceof Array;
      for (var k in obj){
        if (obj[k]===null) isArray ? obj.splice(k,1) : delete obj[k];
        else if (typeof obj[k]=="object") removeNulls(obj[k]);
      }
      return obj;
    };
  }

})();

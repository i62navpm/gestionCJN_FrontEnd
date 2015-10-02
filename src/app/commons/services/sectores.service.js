(function() {
  'use strict';

  angular
    .module('app')
    .factory('sectoresService', sectoresService);

  function sectoresService($resource) {
    return {
      sectoresRest: sectoresRest
    };

    function sectoresRest() {
      return $resource('http://127.0.0.1:5050/api/sectores/:id.json:json', null, {
        'get':  {method:'GET', isArray: true},
      });
    }
   
  }

})();
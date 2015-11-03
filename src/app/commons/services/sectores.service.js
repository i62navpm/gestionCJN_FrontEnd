(function() {
  'use strict';

  angular
    .module('app')
    .factory('sectoresService', sectoresService);

  function sectoresService($resource, $location) {
    return {
      sectoresRest: sectoresRest
    };

    function sectoresRest() {
      return $resource('http://127.0.0.1:'+$location.port()+'/api/sectores/:id.json:json', null, {
        'get':  {method:'GET', isArray: true},
      });
    }
   
  }

})();
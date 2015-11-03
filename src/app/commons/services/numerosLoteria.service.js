(function() {
  'use strict';

  angular
    .module('app')
    .factory('numerosLoteriaService', numerosLoteriaService);

  function numerosLoteriaService($resource, $location) {
    return {
      numerosLoteriaRest: numerosLoteriaRest
    };

    function numerosLoteriaRest() {
      return $resource('http://127.0.0.1:'+$location.port()+'/api/numerosLoteria/:id.json:json');
    }
   
  }

})();
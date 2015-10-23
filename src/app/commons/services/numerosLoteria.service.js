(function() {
  'use strict';

  angular
    .module('app')
    .factory('numerosLoteriaService', numerosLoteriaService);

  function numerosLoteriaService($resource) {
    return {
      numerosLoteriaRest: numerosLoteriaRest
    };

    function numerosLoteriaRest() {
      return $resource('http://127.0.0.1:5050/api/numerosLoteria/:id.json:json');
    }
   
  }

})();
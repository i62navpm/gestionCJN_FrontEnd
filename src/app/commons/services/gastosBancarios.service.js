(function() {
  'use strict';

  angular
    .module('app')
    .factory('gastosBancariosService', gastosBancariosService);

  function gastosBancariosService($resource) {
    return {
      gastosBancariosRest: gastosBancariosRest
    };

    function gastosBancariosRest() {
      return $resource('http://127.0.0.1:5050/api/gastosBancarios/:id.json:json');
    }
   
  }

})();
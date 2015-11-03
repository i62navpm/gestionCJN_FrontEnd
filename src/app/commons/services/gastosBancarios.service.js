(function() {
  'use strict';

  angular
    .module('app')
    .factory('gastosBancariosService', gastosBancariosService);

  function gastosBancariosService($resource, $location) {
    return {
      gastosBancariosRest: gastosBancariosRest
    };

    function gastosBancariosRest() {
      return $resource('http://127.0.0.1:'+$location.port()+'/api/gastosBancarios/:id.json:json');
    }
   
  }

})();
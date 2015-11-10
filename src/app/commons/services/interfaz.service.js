(function() {
  'use strict';

  angular
    .module('app')
    .factory('interfazService', interfazService);

  function interfazService($http, $location) {
    return {
      interfazRest: interfazRest
    };

    function interfazRest() {
      return $http.get('http://127.0.0.1:'+$location.port()+'/api/users.json');
    }
   
  }

})();
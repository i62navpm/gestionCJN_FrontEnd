(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('login', {
        url: "/login",
        templateProvider: function($http, $location){  
          return $http.get('http://127.0.0.1:'+$location.port()+'/login').then(function(response){return response.data;}); 
        },
        controller: 'Login',
        controllerAs: 'vm',
      });
  }
  
})();
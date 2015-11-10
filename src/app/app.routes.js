(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  function config($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state("home", {
        url: "/",
        templateProvider: function($templateCache){  
          return $templateCache.get('interfaz/home.html'); 
        }
      });
  }

})();
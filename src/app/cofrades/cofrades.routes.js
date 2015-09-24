(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('cofrades', {
        url: "/cofrades",
        templateProvider: function($templateCache){  
          return $templateCache.get('cofrades/cofrades.html'); 
        },
        controller: 'Cofrades',
        controllerAs: 'vm',
        resolve: {
            cofradesPrepService: cofradesPrepService
        }
      });
  }

  function cofradesPrepService(cofradesService) {
    return cofradesService.cofradesRest().query();
  }

})();
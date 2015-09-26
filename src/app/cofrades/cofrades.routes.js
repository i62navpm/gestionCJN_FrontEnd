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
          return $templateCache.get('cofrades/list/cofrades.html'); 
        },
        controller: 'Cofrades',
        controllerAs: 'vm',
        resolve: {
            cofradesPrepService: cofradesPrepService
        }
      })
      .state('cofradesDetalle', {
        url: "/cofrades/:cofradeId",
        templateProvider: function($templateCache){  
          return $templateCache.get('cofrades/detail/cofradeDetalle.html'); 
        },
        controller: 'CofradeDetalle',
        controllerAs: 'vm',
        resolve: {
            getCofradePrepService: getCofradePrepService
        }
      });
  }

  function cofradesPrepService(cofradesService) {
    return cofradesService.cofradesRest().query();
  }

  function getCofradePrepService(cofradesService, $stateParams) {
    return cofradesService.cofradesRest().get({id: $stateParams.cofradeId});
  }

})();
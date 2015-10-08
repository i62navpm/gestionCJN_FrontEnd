(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('costaleros', {
        url: "/costaleros",
        templateProvider: function($templateCache){  
          return $templateCache.get('costaleros/list/costaleros.html'); 
        },
        controller: 'Costaleros',
        controllerAs: 'vm',
        resolve: {
            costalerosPrepService: costalerosPrepService
        }
      })
      .state('costalerosDetalle', {
        url: "/costaleros/:costaleroId",
        templateProvider: function($templateCache){  
          return $templateCache.get('costaleros/detail/costaleroDetalle.html'); 
        },
        controller: 'CostaleroDetalle',
        controllerAs: 'vm',
        resolve: {
            getCostaleroPrepService: getCostaleroPrepService
        }
      }).
      state('costalerosCambios', {
        url: "/costaleros/cambios/:costaleroId",
        templateProvider: function($templateCache){  
          return $templateCache.get('costaleros/addModify/costaleroAddModify.html'); 
        },
        controller: 'CostaleroAddModify',
        controllerAs: 'vm',
        resolve: {
            getCostaleroPrepService: getCostaleroPrepService
        }
      });
  }

  function costalerosPrepService(costalerosService) {
    return costalerosService.costalerosRest().query();
  }

  
  function getCostaleroPrepService(costalerosService, $stateParams) {
    return ($stateParams.costaleroId) ? costalerosService.costalerosRest().get({id: $stateParams.costaleroId}) : false;
  }
  
})();
(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('sectores', {
        url: "/sectores",
        templateProvider: function($templateCache){  
          return $templateCache.get('sectores/list/sectores.html'); 
        },
        controller: 'Sectores',
        controllerAs: 'vm',
        resolve: {
            sectoresPrepService: sectoresPrepService
        }
      }).
      state('sectoresCambios', {
        url: "/sectores/cambios/:sectorId/:calle",
        templateProvider: function($templateCache){  
          return $templateCache.get('sectores/addModify/sectorAddModify.html'); 
        },
        controller: 'SectorAddModify',
        controllerAs: 'vm',
        resolve: {
            getSectorPrepService: getSectorPrepService
        }
      });
  }

  function sectoresPrepService(sectoresService) {
    return sectoresService.sectoresRest().query();
  }
  
  function getSectorPrepService(sectoresService, $stateParams) {
    return ($stateParams.sectorId) ? sectoresService.sectoresRest().get({id: $stateParams.sectorId}) : false;
  }
  
})();
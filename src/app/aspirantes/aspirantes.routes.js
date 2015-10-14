(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('aspirantes', {
        url: "/aspirantes",
        templateProvider: function($templateCache){  
          return $templateCache.get('aspirantes/list/aspirantes.html'); 
        },
        controller: 'Aspirantes',
        controllerAs: 'vm',
        resolve: {
            aspirantesPrepService: aspirantesPrepService
        }
      })
      .state('aspirantesDetalle', {
        url: "/aspirantes/:aspiranteId",
        templateProvider: function($templateCache){  
          return $templateCache.get('aspirantes/detail/aspiranteDetalle.html'); 
        },
        controller: 'AspiranteDetalle',
        controllerAs: 'vm',
        resolve: {
            getAspirantePrepService: getAspirantePrepService
        }
      }).
      state('aspirantesCambios', {
        url: "/aspirantes/cambios/:aspiranteId",
        templateProvider: function($templateCache){  
          return $templateCache.get('aspirantes/addModify/aspiranteAddModify.html'); 
        },
        controller: 'AspiranteAddModify',
        controllerAs: 'vm',
        resolve: {
            getAspirantePrepService: getAspirantePrepService
        }
      });
  }

  function aspirantesPrepService(aspirantesService) {
    return aspirantesService.aspirantesRest().query();
  }

  
  function getAspirantePrepService(aspirantesService, $stateParams) {
    return ($stateParams.aspiranteId) ? aspirantesService.aspirantesRest().get({id: $stateParams.aspiranteId}) : false;
  }
  
})();
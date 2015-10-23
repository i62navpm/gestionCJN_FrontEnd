(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('numerosLoteria', {
        url: "/numerosLoteria",
        templateProvider: function($templateCache){  
          return $templateCache.get('numerosLoteria/modify/numerosLoteriaModify.html'); 
        },
        controller: 'NumerosLoteria',
        controllerAs: 'vm',
        resolve: {
            numerosLoteriaPrepService: numerosLoteriaPrepService
        }
      });
  }

  function numerosLoteriaPrepService(numerosLoteriaService) {
    return numerosLoteriaService.numerosLoteriaRest().query();
  }
  
})();
(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('gastosBancarios', {
        url: "/gastosBancarios",
        templateProvider: function($templateCache){  
          return $templateCache.get('gastosBancarios/modify/gastoBancarioModify.html'); 
        },
        controller: 'GastosBancarios',
        controllerAs: 'vm',
        resolve: {
            gastosBancariosPrepService: gastosBancariosPrepService
        }
      });
  }

  function gastosBancariosPrepService(gastosBancariosService) {
    return gastosBancariosService.gastosBancariosRest().query();
  }
  
})();
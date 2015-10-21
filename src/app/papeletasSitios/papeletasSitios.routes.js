(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('papeletasSitios', {
        url: "/papeletasSitios",
        templateProvider: function($templateCache){  
          return $templateCache.get('papeletasSitios/list/papeletasSitios.html'); 
        },
        controller: 'PapeletasSitios',
        controllerAs: 'vm',
        resolve: {
            papeletasSitiosPrepService: papeletasSitiosPrepService
        }
      }).
      state('papeletasSitiosCambios', {
        url: "/papeletasSitios/cambios",
        templateProvider: function($templateCache){  
          return $templateCache.get('papeletasSitios/addModify/papeletaSitioAddModify.html'); 
        },
        controller: 'PapeletaSitioAddModify',
        controllerAs: 'vm',
      });
  }

  function papeletasSitiosPrepService(papeletasSitiosService) {
    return papeletasSitiosService.papeletasSitiosRest().query({anios: true});
  }
  
})();
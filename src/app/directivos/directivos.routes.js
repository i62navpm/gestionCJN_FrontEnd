(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('directivos', {
        url: "/directivos",
        templateProvider: function($templateCache){  
          return $templateCache.get('directivos/list/directivos.html'); 
        },
        controller: 'Directivos',
        controllerAs: 'vm',
        resolve: {
            directivosPrepService: directivosPrepService
        }
      })
      .state('directivosDetalle', {
        url: "/directivos/:directivoId",
        templateProvider: function($templateCache){  
          return $templateCache.get('directivos/detail/directivoDetalle.html'); 
        },
        controller: 'DirectivoDetalle',
        controllerAs: 'vm',
        resolve: {
            getDirectivoPrepService: getDirectivoPrepService
        }
      }).
      state('directivosCambios', {
        url: "/directivos/cambios/:directivoId",
        templateProvider: function($templateCache){  
          return $templateCache.get('directivos/addModify/directivoAddModify.html'); 
        },
        controller: 'DirectivoAddModify',
        controllerAs: 'vm',
        resolve: {
            getDirectivoPrepService: getDirectivoPrepService
        }
      });
  }

  function directivosPrepService(directivosService) {
    return directivosService.directivosRest().query();
  }

  
  function getDirectivoPrepService(directivosService, $stateParams) {
    return ($stateParams.directivoId) ? directivosService.directivosRest().get({id: $stateParams.directivoId}) : false;
  }
  
})();
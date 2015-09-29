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
            getCofradePrepService: getCofradePrepService,
            getMapsPrepService: getMapsPrepService
        }
      }).
      state('cofradesModificar', {
        url: "/cofrades/cambios/:cofradeId",
        templateProvider: function($templateCache){  
          return $templateCache.get('cofrades/modify/cofradeModificar.html'); 
        },
        controller: 'CofradeModificar',
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
  
  function getMapsPrepService(uiGmapGoogleMapApi, getCofradePrepService, mapasService) {
    return getCofradePrepService.$promise.then(function(data){
      
      var address = data.datosPersonales.direccion.calle     + ' ' +
                    data.datosPersonales.direccion.numero    + ' ' +
                    data.datosPersonales.direccion.municipio + ' ' +
                    data.datosPersonales.direccion.provincia + ' ' +
                    data.datosPersonales.direccion.cp;

      return mapasService.geoCodingAPI(address).
        then(function(response){
          if (response.data.results.length){
            var coordinates = response.data.results[0].geometry.location;
            return uiGmapGoogleMapApi.then(function(maps) {
              return  {coord:  { latitude: coordinates.lat, 
                                longitude: coordinates.lng },
                       marker: { latitude: coordinates.lat, 
                                longitude: coordinates.lng },
                      zoom: 17 };
            });
          }
        });
    });
  }

})();
(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('autoridades', {
        url: "/autoridades",
        templateProvider: function($templateCache){  
          return $templateCache.get('autoridades/list/autoridades.html'); 
        },
        controller: 'Autoridades',
        controllerAs: 'vm',
        resolve: {
            autoridadesPrepService: autoridadesPrepService
        }
      })
      .state('autoridadesDetalle', {
        url: "/autoridades/:autoridadId",
        templateProvider: function($templateCache){  
          return $templateCache.get('autoridades/detail/autoridadDetalle.html'); 
        },
        controller: 'AutoridadDetalle',
        controllerAs: 'vm',
        resolve: {
            getAutoridadPrepService: getAutoridadPrepService,
            getMapsPrepService: getMapsPrepService
        }
      }).
      state('autoridadesCambios', {
        url: "/autoridades/cambios/:autoridadId",
        templateProvider: function($templateCache){  
          return $templateCache.get('autoridades/addModify/autoridadAddModify.html'); 
        },
        controller: 'AutoridadAddModify',
        controllerAs: 'vm',
        resolve: {
            getAutoridadPrepService: getAutoridadPrepService
        }
      });
  }

  function autoridadesPrepService(autoridadesService) {
    return autoridadesService.autoridadesRest().query();
  }

  
  function getAutoridadPrepService(autoridadesService, $stateParams) {
    return ($stateParams.autoridadId) ? autoridadesService.autoridadesRest().get({id: $stateParams.autoridadId}) : false;
  }

  function getMapsPrepService(uiGmapGoogleMapApi, getAutoridadPrepService, mapasService) {
    return getAutoridadPrepService.$promise.then(function(data){
      
      var address = data.direccion.calle     + ' ' +
                    data.direccion.numero    + ' ' +
                    data.direccion.municipio + ' ' +
                    data.direccion.provincia + ' ' +
                    data.direccion.cp;

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
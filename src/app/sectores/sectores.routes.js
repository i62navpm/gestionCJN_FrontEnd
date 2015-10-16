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
      })
      .state('sectoresDetalle', {
        url: "/sectores/:sectorId",
        templateProvider: function($templateCache){  
          return $templateCache.get('sectores/detail/sectorDetalle.html'); 
        },
        controller: 'SectorDetalle',
        controllerAs: 'vm',
        resolve: {
            getSectorPrepService: getSectorPrepService,
            getMapsPrepService: getMapsPrepService
        }
      }).
      state('sectoresCambios', {
        url: "/sectores/cambios/:sectorId",
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

  function getMapsPrepService(uiGmapGoogleMapApi, getSectorPrepService, mapasService) {
    return getSectorPrepService.$promise.then(function(data){
      
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
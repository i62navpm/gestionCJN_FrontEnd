(function() {
  'use strict';
  angular
    .module('app')
    .controller('CofradeDetalle', CofradeDetalle);

  function CofradeDetalle(uiGmapGoogleMapApi, getCofradePrepService, mapasService) {
    var vm = this;

    vm.cofrade = null;
    
    activate();
    
    function activate() {
      return getCofradePrepService.$promise.then(function(data){
        vm.cofrade = data;
        var address = vm.cofrade.datosPersonales.direccion.calle     + ' ' +
                      vm.cofrade.datosPersonales.direccion.numero    + ' ' +
                      vm.cofrade.datosPersonales.direccion.municipio + ' ' +
                      vm.cofrade.datosPersonales.direccion.provincia + ' ' +
                      vm.cofrade.datosPersonales.direccion.cp;

        mapasService.geoCodingAPI(address).
          then(function(response){
            if (response.data.results.length){
              var coordinates = response.data.results[0].geometry.location;

              uiGmapGoogleMapApi.then(function(maps) {
                vm.maps = {coord: { latitude: coordinates.lat, 
                                    longitude: coordinates.lng },
                           zoom: 17 };

              });
            }
          });
      });
    }

  }

})();
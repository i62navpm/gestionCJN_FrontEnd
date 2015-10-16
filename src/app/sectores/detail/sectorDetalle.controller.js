(function() {
  'use strict';
  angular
    .module('app')
    .controller('SectorDetalle', SectorDetalle);

  function SectorDetalle($state, getSectorPrepService, getMapsPrepService) {
    var vm = this;

    vm.modifySector = modifySector;
    
    activate();

    function activate() {
      return getSectorPrepService.$promise.then(function(data){
        vm.sector = data;
        vm.maps = getMapsPrepService;
      });
    }

    function modifySector(id, event){
      $state.go('sectoresCambios', {sectorId: id});
    }
  }

})();
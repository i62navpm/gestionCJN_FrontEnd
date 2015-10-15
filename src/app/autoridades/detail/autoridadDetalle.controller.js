(function() {
  'use strict';
  angular
    .module('app')
    .controller('AutoridadDetalle', AutoridadDetalle);

  function AutoridadDetalle($state, getAutoridadPrepService, getMapsPrepService) {
    var vm = this;

    vm.modifyAutoridad = modifyAutoridad;
    
    activate();

    function activate() {
      return getAutoridadPrepService.$promise.then(function(data){
        vm.autoridad = data;
        vm.maps = getMapsPrepService;
      });
    }

    function modifyAutoridad(id, event){
      $state.go('autoridadesCambios', {autoridadId: id});
    }
  }

})();
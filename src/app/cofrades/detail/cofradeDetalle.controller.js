(function() {
  'use strict';
  angular
    .module('app')
    .controller('CofradeDetalle', CofradeDetalle);

  function CofradeDetalle(getCofradePrepService, getMapsPrepService) {
    var vm = this;

    vm.cofrade = null;
    vm.maps = getMapsPrepService;
    
    activate();

    function activate() {
      return getCofradePrepService.$promise.then(function(data){
        vm.cofrade = data;
      });
    }


  }

})();
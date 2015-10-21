(function() {
  'use strict';
  angular
    .module('app')
    .controller('PapeletasSitios', PapeletasSitios);

  function PapeletasSitios(papeletasSitiosPrepService) {
    var vm = this;
    
    vm.papeletasSitios = null;
    activate();
    
    function activate() {
      return papeletasSitiosPrepService.$promise.then(function(data){
        vm.papeletasSitios = data;
      });
    }

  }

})();
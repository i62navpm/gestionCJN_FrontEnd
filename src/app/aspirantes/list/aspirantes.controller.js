(function() {
  'use strict';
  angular
    .module('app')
    .controller('Aspirantes', Aspirantes);

  function Aspirantes(aspirantesPrepService) {
    var vm = this;
    
    vm.aspirantes = null;
    activate();
    
    function activate() {
      return aspirantesPrepService.$promise.then(function(data){
        vm.aspirantes = data;
      });
    }

  }

})();
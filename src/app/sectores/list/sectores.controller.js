(function() {
  'use strict';
  angular
    .module('app')
    .controller('Sectores', Sectores);

  function Sectores(sectoresPrepService) {
    var vm = this;
    
    vm.sectores = null;
    activate();
    
    function activate() {
      return sectoresPrepService.$promise.then(function(data){
        vm.sectores = data;
      });
    }

  }

})();
(function() {
  'use strict';
  angular
    .module('app')
    .controller('Costaleros', Costaleros);

  function Costaleros(costalerosPrepService) {
    var vm = this;
    
    vm.costaleros = null;
    activate();
    
    function activate() {
      return costalerosPrepService.$promise.then(function(data){
        vm.costaleros = data;
      });
    }

  }

})();
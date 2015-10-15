(function() {
  'use strict';
  angular
    .module('app')
    .controller('Autoridades', Autoridades);

  function Autoridades(autoridadesPrepService) {
    var vm = this;
    
    vm.autoridades = null;
    activate();
    
    function activate() {
      return autoridadesPrepService.$promise.then(function(data){
        vm.autoridades = data;
      });
    }

  }

})();
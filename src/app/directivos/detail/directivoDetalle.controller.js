(function() {
  'use strict';
  angular
    .module('app')
    .controller('DirectivoDetalle', DirectivoDetalle);

  function DirectivoDetalle($state, getDirectivoPrepService) {
    var vm = this;

    vm.modifyDirectivo = modifyDirectivo;
    
    activate();

    function activate() {
      return getDirectivoPrepService.$promise.then(function(data){
        vm.directivo = data;
      });
    }

    function modifyDirectivo(id, event){
      $state.go('directivosCambios', {directivoId: id});
    }
  }

})();
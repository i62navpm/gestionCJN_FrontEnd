(function() {
  'use strict';
  angular
    .module('app')
    .controller('Directivos', Directivos);

  function Directivos(directivosPrepService) {
    var vm = this;
    
    vm.directivos = null;
    activate();
    
    function activate() {
      return directivosPrepService.$promise.then(function(data){
        vm.directivos = data;
      });
    }

  }

})();
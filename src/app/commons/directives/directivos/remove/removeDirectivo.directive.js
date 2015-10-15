(function() {
  'use strict';

  angular
    .module('app')
    .directive('removeDirectivo', removeDirectivo);


  function removeDirectivo() {
    return {
      restrict: 'E',
      templateUrl: './templates/directives/directivos/remove/removeDirectivo.directive.html',
      scope: {
        directivoId: '=directivo'        
      },
      controller: 'RemoveDirectivo',
      controllerAs: 'vm',
      bindToController: true
    };
  }

})();
(function() {
  'use strict';

  angular
    .module('app')
    .directive('removeAspirante', removeAspirante);


  function removeAspirante() {
    return {
      restrict: 'E',
      templateUrl: './templates/directives/aspirantes/remove/removeAspirante.directive.html',
      scope: {
        aspiranteId: '=aspirante'        
      },
      controller: 'RemoveAspirante',
      controllerAs: 'vm',
      bindToController: true
    };
  }

})();
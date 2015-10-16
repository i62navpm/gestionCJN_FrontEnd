(function() {
  'use strict';

  angular
    .module('app')
    .directive('removeSector', removeSector);


  function removeSector() {
    return {
      restrict: 'E',
      templateUrl: './templates/directives/sectores/remove/removeSector.directive.html',
      scope: {
        sectorId: '=sector'        
      },
      controller: 'RemoveSector',
      controllerAs: 'vm',
      bindToController: true
    };
  }

})();
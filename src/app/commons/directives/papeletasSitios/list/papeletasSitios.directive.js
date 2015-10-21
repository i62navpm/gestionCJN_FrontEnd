(function() {
  'use strict';

  angular
    .module('app')
    .directive('listaPapeletasSitios', listaPapeletasSitios);


  function listaPapeletasSitios() {
    return {
      restrict: 'E',
      templateUrl: './templates/directives/papeletasSitios/list/papeletasSitios.directive.html',
      scope: {
        anios: '=papeletas'        
      },
      controller: 'ListaPapeletasSitios',
      controllerAs: 'vm',
      bindToController: true
    };
  }

})();
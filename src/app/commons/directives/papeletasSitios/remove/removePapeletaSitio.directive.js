(function() {
  'use strict';

  angular
    .module('app')
    .directive('removePapeletaSitio', removePapeletaSitio);


  function removePapeletaSitio() {
    return {
      restrict: 'E',
      templateUrl: './templates/directives/papeletasSitios/remove/removePapeletaSitio.directive.html',
      scope: {
        papeletaSitio: '=papeleta'        
      },
      controller: 'RemovePapeletaSitio',
      controllerAs: 'vm',
      bindToController: true
    };
  }

})();
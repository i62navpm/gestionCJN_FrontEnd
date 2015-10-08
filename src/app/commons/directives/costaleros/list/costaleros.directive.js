(function() {
  'use strict';

  angular
    .module('app')
    .directive('listaCostaleros', listaCostaleros);


  function listaCostaleros() {
    return {
      restrict: 'E',
      templateUrl: './templates/directives/costaleros/list/costaleros.directive.html',
      scope: {
        costaleros: '=costaleros'        
      },
      link: function (scope, element) {
        scope.$watch('vm.costaleros', function(newVal) {
            if(newVal) { 
              scope.vm.costalerosShort = scope.vm.costaleros.map(function(costalero){
                var aux = {sitio: costalero.sitio};
                if (costalero.cofrade){
                  aux.numeroOrden = costalero.cofrade.numeroOrden;
                  aux.nombre = costalero.cofrade.datosPersonales.nombre    + ' ' +
                               costalero.cofrade.datosPersonales.apellido1 + ' ' + 
                               costalero.cofrade.datosPersonales.apellido2;
                }
                return aux;
                        
              });
            }
        }, true);
      },
      controller: 'ListaCostaleros',
      controllerAs: 'vm',
      bindToController: true
    };
  }

})();
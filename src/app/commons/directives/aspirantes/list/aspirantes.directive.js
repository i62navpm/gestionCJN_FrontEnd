(function() {
  'use strict';

  angular
    .module('app')
    .directive('listaAspirantes', listaAspirantes);


  function listaAspirantes() {
    return {
      restrict: 'E',
      templateUrl: './templates/directives/aspirantes/list/aspirantes.directive.html',
      scope: {
        aspirantes: '=aspirantes'        
      },
      link: function (scope, element) {
        scope.$watch('vm.aspirantes', function(newVal) {
            if(newVal) { 
              scope.vm.aspirantesShort = scope.vm.aspirantes.map(function(aspirante){
                var aux = {id: aspirante.id, 
                           fecha: aspirante.fecha};
                if (aspirante.cofrade){
                  aux.numeroOrden = aspirante.cofrade.numeroOrden;
                  aux.nombre = aspirante.cofrade.datosPersonales.nombre    + ' ' +
                               aspirante.cofrade.datosPersonales.apellido1 + ' ' + 
                               aspirante.cofrade.datosPersonales.apellido2;
                }
                return aux;
                        
              });
            }
        }, true);
      },
      controller: 'ListaAspirantes',
      controllerAs: 'vm',
      bindToController: true
    };
  }

})();
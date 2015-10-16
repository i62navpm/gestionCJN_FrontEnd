(function() {
  'use strict';

  angular
    .module('app')
    .directive('listaSectores', listaSectores);


  function listaSectores() {
    return {
      restrict: 'E',
      templateUrl: './templates/directives/sectores/list/sectores.directive.html',
      scope: {
        sectores: '=sectores'        
      },
      link: function (scope, element) {
        scope.$watch('vm.sectores', function(newVal) {
            if(newVal) { 
              scope.vm.sectoresShort = scope.vm.sectores.map(function(sector){
                var aux = {id: sector.id, 
                           numeroSector: sector.numeroSector,
                           calles: sector.calles};
                if (sector.cofrade){
                  aux.numeroOrden = sector.cofrade.numeroOrden;
                  aux.nombre = sector.cofrade.datosPersonales.nombre    + ' ' +
                               sector.cofrade.datosPersonales.apellido1 + ' ' + 
                               sector.cofrade.datosPersonales.apellido2;
                }
                return aux;
                        
              });
            }
        }, true);
      },
      controller: 'ListaSectores',
      controllerAs: 'vm',
      bindToController: true
    };
  }

})();
(function() {
  'use strict';

  angular
    .module('app')
    .directive('listaDirectivos', listaDirectivos);


  function listaDirectivos() {
    return {
      restrict: 'E',
      templateUrl: './templates/directives/directivos/list/directivos.directive.html',
      scope: {
        directivos: '=directivos'        
      },
      link: function (scope, element) {
        scope.$watch('vm.directivos', function(newVal) {
            if(newVal) { 
              scope.vm.directivosShort = scope.vm.directivos.map(function(directivo){
                var aux = {id: directivo.id, 
                           posicion: directivo.posicion};
                if (directivo.cofrade){
                  aux.numeroOrden = directivo.cofrade.numeroOrden;
                  aux.nombre = directivo.cofrade.datosPersonales.nombre    + ' ' +
                               directivo.cofrade.datosPersonales.apellido1 + ' ' + 
                               directivo.cofrade.datosPersonales.apellido2;
                }
                return aux;
                        
              });
            }
        }, true);
      },
      controller: 'ListaDirectivos',
      controllerAs: 'vm',
      bindToController: true
    };
  }

})();
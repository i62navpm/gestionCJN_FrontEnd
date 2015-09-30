(function() {
  'use strict';
  angular
    .module('app')
    .controller('CofradeNuevo', CofradeNuevo);

  function CofradeNuevo(getCallesPrepService) {
    var vm = this;

    vm.cofrade = {datosFinancieros: {deuda: []},
                  datosPersonales:  {direccion: {},
                                     sexo: "Hombre",
                                     fechaInscripcion: new Date(),
                                     fechaNacimiento: false}
                 };

    vm.backState = backState;
    vm.querySearch = querySearch;
    vm.selectedItemChange = selectedItemChange;

    activate();

    function activate() {
      vm.calles = getCallesPrepService;
    }

    function backState(){
      window.history.back();
    }

    function querySearch(query){
      var results = query ? vm.calles.filter( createFilterFor(query) ) : vm.calles;
      return results;
    }

    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(item) {
        return (angular.lowercase(item.calle).indexOf(lowercaseQuery) === 0);
      };
    }

    function selectedItemChange(item){
      if (item){
        vm.cofrade.datosPersonales.direccion.calle = item.calle;
        vm.cofrade.datosPersonales.direccion.municipio = item.municipio;
        vm.cofrade.datosPersonales.direccion.cp = item.cp;
        vm.cofrade.datosPersonales.direccion.provincia = item.provincia;
      }else{
        vm.cofrade.datosPersonales.direccion.calle = null;
        vm.cofrade.datosPersonales.direccion.municipio = null;
        vm.cofrade.datosPersonales.direccion.cp = null;
        vm.cofrade.datosPersonales.direccion.provincia = null;
      }
    }
  }

})();
(function() {
  'use strict';
  angular
    .module('app')
    .controller('CofradeNuevo', CofradeNuevo);

  function CofradeNuevo($filter, $document, $mdToast, $state, getCofradePrepService, getCallesPrepService, getRegistrosPrepService, cofradesService) {
    var vm = this;
    
    vm.cofrade = {datosFinancieros: {cuenta: {}, 
                                     deuda: []},
                  datosPersonales:  {direccion: {},
                                     sexo: "Hombre",
                                     fechaInscripcion: new Date(),
                                     fechaNacimiento: new Date()}
                 };

    vm.backState = backState;
    vm.querySearch = querySearch;
    vm.selectedItemChange = selectedItemChange;
    vm.calcularCC = calcularCC;
    vm.calcularIban = calcularIban;
    vm.guardar = guardar;

    activate();

    function activate() {
      if (getCofradePrepService){
        getCofradePrepService.$promise.then(function(data){
                                              vm.cofrade = data;
                                              vm.calleSelected = vm.cofrade.datosPersonales.direccion.calle;
                                              if (!vm.cofrade.datosFinancieros)
                                                vm.cofrade.datosFinancieros = {cuenta: {}, deuda: []};
                                              else{
                                                if(!vm.cofrade.datosFinancieros.cuenta)
                                                  vm.cofrade.datosFinancieros.cuenta = {};
                                                if(!vm.cofrade.datosFinancieros.deuda)
                                                  vm.cofrade.datosFinancieros.deuda = [];
                                              }
                                              return true;
                                            });

      }
      else{
        vm.cofrade.numeroOrden = getRegistrosPrepService.numeroOrden;
        vm.cofrade.numeroCofrade = getRegistrosPrepService.numeroCofrade;

      }
      vm.calles = getCallesPrepService;

    }

    function backState() {
      window.history.back();
    }

    function querySearch(query) {
      var results = query ? vm.calles.filter( createFilterFor(query) ) : vm.calles;
      return results;
    }

    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(item) {
        return (angular.lowercase(item.calle).indexOf(lowercaseQuery) === 0);
      };
    }

    function selectedItemChange(item) {
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
    
    function calcularCC() {
      if (vm.cofrade.datosFinancieros.cuenta.iban)
        vm.cofrade.datosFinancieros.cuenta.cc = $filter('calcularCC')(vm.cofrade.datosFinancieros.cuenta.iban);
    }

    function calcularIban() {
      if (vm.cofrade.datosFinancieros.cuenta.cc)
        vm.cofrade.datosFinancieros.cuenta.iban = $filter('calcularIban')(vm.cofrade.datosFinancieros.cuenta.cc);
    }

    function guardar(isValid) {
      if(isValid){
        var datosFinancieros = {cuenta: {}, deuda: []};
        
        if (JSON.stringify(vm.cofrade.datosFinancieros) === JSON.stringify(datosFinancieros))
          delete vm.cofrade.datosFinancieros;
        
        var CofradeResource = cofradesService.cofradesRest();
        CofradeResource.save(vm.cofrade, guardarSuccess, guardarError);
      }
      else
        showActionToast();
    }

    function guardarSuccess(response) {
      $mdToast.show(
        $mdToast.simple()
          .content('Guardado con éxito!!')
          .position('top right')
          .hideDelay(3000)
      );
      $state.go('cofrades');
    }

    function guardarError(response) {
      $mdToast.show(
        $mdToast.simple()
          .content('Error al guardar!!')
          .position('top right')
          .parent($document[0].querySelector('#toastBounds'))
          .hideDelay(3000)
      );
    }
    
    function showActionToast() {
      $mdToast.show(
        $mdToast.simple()
          .content('Existen errores en el formulario')
          .action('OK')
          .highlightAction(false)
          .parent($document[0].querySelector('#toastBounds'))
          .position('top right')
      );
    }
  }


})();
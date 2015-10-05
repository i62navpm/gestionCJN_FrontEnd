(function() {
  'use strict';
  angular
    .module('app')
    .controller('CofradeNuevo', CofradeNuevo);

  function CofradeNuevo($filter, $document, $mdToast, $state, getCofradePrepService, cofradesService, sectoresService) {
    var vm = this;
    
    vm.nuevaCalle = true;
    vm.cofrade = {datosFinancieros: {cuenta: {}, 
                                     deuda: []},
                  datosPersonales:  {direccion: {},
                                     sexo: "Hombre",
                                     fechaInscripcion: new Date(),
                                     fechaNacimiento: new Date()}
                 };

    vm.backState          = backState;
    vm.querySearch        = querySearch;
    vm.selectedItemChange = selectedItemChange;
    vm.calcularCC         = calcularCC;
    vm.calcularIban       = calcularIban;
    vm.guardar            = guardar;

    activate();

    function activate() {
      if (getCofradePrepService){
        getCofradePrepService.$promise.then(initCofrade);
      }
      else{
        cofradesService.getRegistros().then(function(response){
                                              vm.cofrade.numeroOrden = response.data.numeroOrden;
                                              vm.cofrade.numeroCofrade = response.data.numeroCofrade;
                                            });

      }
    }

    function initCofrade(data) {
      vm.cofrade = data;
      vm.calleSelected = {calle: vm.cofrade.datosPersonales.direccion.calle,
                          cp: vm.cofrade.datosPersonales.direccion.cp,
                          provincia: vm.cofrade.datosPersonales.direccion.provincia,
                          municipio: vm.cofrade.datosPersonales.direccion.municipio};
      searchSector(vm.cofrade.datosPersonales.direccion.calle);

      vm.cofrade.datosFinancieros = vm.cofrade.datosFinancieros || {cuenta: {}, deuda: []};
      vm.cofrade.datosFinancieros.cuenta = vm.cofrade.datosFinancieros.cuenta || {};
      vm.cofrade.datosFinancieros.deuda = vm.cofrade.datosFinancieros.deuda || [];
      return true;
    }

    function backState() {
      window.history.back();
    }

    function querySearch(query) {
      return cofradesService.getCalles(query).then(function(response){return response.data;});
    }

    function selectedItemChange(item) {
      if (item){
        vm.cofrade.datosPersonales.direccion.calle = item.calle;
        vm.cofrade.datosPersonales.direccion.municipio = item.municipio;
        vm.cofrade.datosPersonales.direccion.cp = item.cp;
        vm.cofrade.datosPersonales.direccion.provincia = item.provincia;
        searchSector(item.calle);
      }else{
        vm.cofrade.datosPersonales.direccion.calle = null;
        vm.cofrade.datosPersonales.direccion.municipio = null;
        vm.cofrade.datosPersonales.direccion.cp = null;
        vm.cofrade.datosPersonales.direccion.provincia = null;
        vm.sector = null;
        vm.nuevaCalle = true;
      }
    }
    
    function searchSector(calle) {
      sectoresService.sectoresRest().query({calle: calle}, function(data){
        vm.sector = data[0].numeroSector;
        vm.nuevaCalle = false;
      });
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
        vm.cofrade.datosPersonales.direccion.calle = vm.searchText;

        if (JSON.stringify(vm.cofrade.datosFinancieros) === JSON.stringify(datosFinancieros))
          delete vm.cofrade.datosFinancieros;
        
        var CofradeResource = cofradesService.cofradesRest();
        if(vm.nuevaCalle)
          guardarCalle();
        else{
          CofradeResource.save(vm.cofrade, guardarSuccess, guardarError);
        }
      }
      else
        showActionToast();
      
      function guardarCalle() {
        sectoresService.sectoresRest().get({sector: vm.sector}, function(data){
          var sectorResource =  data[0];
          
          if(sectorResource){
            sectorResource.calles.push(vm.searchText);
            sectorResource.$save();
            CofradeResource.save(vm.cofrade, guardarSuccess, guardarError);
          }
          else{
            $mdToast.show(
              $mdToast.simple()
                .content('El sector ' +vm.sector+ ' no existe!!')
                .position('top right')
                .parent($document[0].querySelector('#toastBounds'))
                .hideDelay(3000)
            );
          }
        });
      }
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
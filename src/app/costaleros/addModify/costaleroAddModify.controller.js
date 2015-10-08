(function() {
  'use strict';
  angular
    .module('app')
    .controller('CostaleroAddModify', CostaleroAddModify);

  function CostaleroAddModify($filter, $document, $mdToast, $state, getCostaleroPrepService, costalerosService, sectoresService) {
    var vm = this;
    
    vm.nuevaCalle = true;
    vm.costalero = {datosFinancieros: {cuenta: {}, 
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
      if (getCostaleroPrepService){
        getCostaleroPrepService.$promise.then(initCostalero);
      }
      else{
        costalerosService.getRegistros().then(function(response){
                                              vm.costalero.numeroOrden = response.data.numeroOrden;
                                              vm.costalero.numeroCostalero = response.data.numeroCostalero;
                                            });

      }
    }

    function initCostalero(data) {
      vm.costalero = data;
      vm.calleSelected = {calle: vm.costalero.datosPersonales.direccion.calle,
                          cp: vm.costalero.datosPersonales.direccion.cp,
                          provincia: vm.costalero.datosPersonales.direccion.provincia,
                          municipio: vm.costalero.datosPersonales.direccion.municipio};

      vm.fechaNacimiento = vm.costalero.datosPersonales.fechaNacimiento;
      vm.fechaInscripcion = vm.costalero.datosPersonales.fechaInscripcion;
      vm.costalero.datosFinancieros = vm.costalero.datosFinancieros || {cuenta: {}, deuda: []};
      vm.costalero.datosFinancieros.cuenta = vm.costalero.datosFinancieros.cuenta || {};
      vm.costalero.datosFinancieros.deuda = vm.costalero.datosFinancieros.deuda || [];
      return true;
    }

    function backState() {
      window.history.back();
    }

    function querySearch(query) {
      return costalerosService.getCalles(query).then(function(response){return response.data;});
    }

    function selectedItemChange(item) {
      if (item){
        vm.costalero.datosPersonales.direccion.calle = item.calle;
        vm.costalero.datosPersonales.direccion.municipio = item.municipio;
        vm.costalero.datosPersonales.direccion.cp = item.cp;
        vm.costalero.datosPersonales.direccion.provincia = item.provincia;
        searchSector(item.calle);
      }else{
        vm.costalero.datosPersonales.direccion.calle = null;
        vm.costalero.datosPersonales.direccion.municipio = null;
        vm.costalero.datosPersonales.direccion.cp = null;
        vm.costalero.datosPersonales.direccion.provincia = null;
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
      if (vm.costalero.datosFinancieros.cuenta.iban)
        vm.costalero.datosFinancieros.cuenta.cc = $filter('calcularCC')(vm.costalero.datosFinancieros.cuenta.iban);
    }

    function calcularIban() {
      if (vm.costalero.datosFinancieros.cuenta.cc)
        vm.costalero.datosFinancieros.cuenta.iban = $filter('calcularIban')(vm.costalero.datosFinancieros.cuenta.cc);
    }

    function guardar(isValid) {
      if(isValid){
        var datosFinancieros = {cuenta: {}, deuda: []};

        vm.costalero.datosPersonales.direccion.calle = vm.searchText;

        if (JSON.stringify(vm.costalero.datosFinancieros) === JSON.stringify(datosFinancieros))
          delete vm.costalero.datosFinancieros;
        
        var CostaleroResource = costalerosService.costalerosRest();
        if(vm.nuevaCalle)
          guardarCalle();
        else{
          CostaleroResource.save(vm.costalero, guardarSuccess, guardarError);
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
            CostaleroResource.save(vm.costalero, guardarSuccess, guardarError);
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
      $state.go('costaleros');
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
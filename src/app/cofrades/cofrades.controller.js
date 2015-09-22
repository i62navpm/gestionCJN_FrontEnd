(function() {
  'use strict';
  angular
    .module('app')
    .controller('Cofrades', Cofrades);


  function Cofrades(cofradesService) {
    var vm = this;
    console.log(cofradesService.getCofrades().query());
    cofradesService.getCofrades().get({id: '55ed685bff2a221f3d7bc6e4'}, function(cofrade){
      cofrade.datosPersonales.nombre = 'Pepé';
      console.log(cofrade.datosPersonales.nombre);
      cofrade.$save();
    });
  }

})();
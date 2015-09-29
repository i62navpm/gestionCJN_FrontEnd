(function() {
  'use strict';

  angular
    .module('app')
    .filter('stringToDate', stringToDate)
    .filter('dateToString', dateToString);

  function stringToDate(){
    return function(data){
      data.datosPersonales.fechaNacimiento = new Date(data.datosPersonales.fechaNacimiento);
      data.datosPersonales.fechaInscripcion = new Date(data.datosPersonales.fechaInscripcion);
      return data;
    };
  }

  function dateToString(){
    return function(data){
      data.datosPersonales.fechaNacimiento = data.datosPersonales.fechaNacimiento.toLocaleDateString();
      data.datosPersonales.fechaInscripcion = data.datosPersonales.fechaInscripcion.toLocaleDateString();
      return data;
    };
  }

})();

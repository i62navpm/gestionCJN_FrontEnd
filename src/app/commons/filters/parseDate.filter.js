(function() {
  'use strict';

  angular
    .module('app')
    .filter('stringToDateFormat', stringToDateFormat)
    .filter('formatDates', formatDates);

  function stringToDateFormat(){
    return function(data){
      data.datosPersonales.fechaNacimiento  = new Date(data.datosPersonales.fechaNacimiento).toLocaleDateString();
      data.datosPersonales.fechaInscripcion = new Date(data.datosPersonales.fechaInscripcion).toLocaleDateString();
      return data;
    };
  }

  function formatDates(){
    return function(data){
      var date = data.datosPersonales.fechaNacimiento.split("/");
      data.datosPersonales.fechaNacimiento  = date[2] + '-' + date[1] + '-' + date[0];
      date = data.datosPersonales.fechaInscripcion.split("/");
      data.datosPersonales.fechaInscripcion = date[2] + '-' + date[1] + '-' + date[0];
      return data;
    };
  }

})();

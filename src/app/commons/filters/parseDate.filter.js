(function() {
  'use strict';

  angular
    .module('app')
    .filter('stringToDateFormat', stringToDateFormat)
    .filter('formatDates', formatDates);

  function stringToDateFormat(){
    return function(data){
      if (data.datosPersonales){
        data.datosPersonales.fechaNacimiento  = new Date(data.datosPersonales.fechaNacimiento).toLocaleDateString();
        data.datosPersonales.fechaInscripcion = new Date(data.datosPersonales.fechaInscripcion).toLocaleDateString();
      }
      if(data.fecha)
        data.fecha  = new Date(data.fecha).toLocaleDateString();

      return data;
    };
  }

  function formatDates(){
    return function(data){
      
      var date = null;
      if (data.datosPersonales){
        date = data.datosPersonales.fechaNacimiento.split("/");
        data.datosPersonales.fechaNacimiento  = date[2] + '-' + date[1] + '-' + date[0];
        date = data.datosPersonales.fechaInscripcion.split("/");
        data.datosPersonales.fechaInscripcion = date[2] + '-' + date[1] + '-' + date[0];
      }
      else if (data.fecha){
        date = data.fecha.split("/");
        data.fecha  = date[2] + '-' + date[1] + '-' + date[0];
      }
      else{
        data = new Date(data).toLocaleDateString();
      }

      return data;
    };
  }

})();

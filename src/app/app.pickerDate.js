(function() {
  'use strict';

  angular
    .module('app')
    .config(datePickerConfig);

  function datePickerConfig($mdDateLocaleProvider) {

    $mdDateLocaleProvider.months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    $mdDateLocaleProvider.shortMonths = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
    $mdDateLocaleProvider.days = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];
    $mdDateLocaleProvider.shortDays = ['lun', 'mar', 'mié', 'jue', 'vie', 'sáb', 'dom'];

    $mdDateLocaleProvider.firstDayOfWeek = 1;
    
    $mdDateLocaleProvider.parseDate = function(dateString) {
      return new Date(dateString);
    };
    
    $mdDateLocaleProvider.formatDate = function(date) {
      return new Date(date).toLocaleDateString();
    };

  }

})();

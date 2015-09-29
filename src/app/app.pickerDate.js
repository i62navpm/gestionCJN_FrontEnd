(function() {
  'use strict';

  angular
    .module('app')
    .config(datePickerConfig);

  function datePickerConfig($mdDateLocaleProvider) {

    $mdDateLocaleProvider.firstDayOfWeek = 1;
    $mdDateLocaleProvider.parseDate = function(dateString) {
      return new Date(dateString);
    };
    $mdDateLocaleProvider.formatDate = function(date) {
      return new Date(date).toLocaleDateString();
    };

  };

})();

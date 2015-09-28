(function() {
  'use strict';

  angular
    .module('app')
    .config(googleMapAPI);

  function googleMapAPI(uiGmapGoogleMapApiProvider){
    uiGmapGoogleMapApiProvider.configure({
        libraries: 'weather,geometry,visualization'
    });    
  }

})();
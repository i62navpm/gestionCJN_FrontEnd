(function() {
  'use strict';

  angular
    .module('app')
    .factory('mapasService', mapasService);

  function mapasService($http) {
    return {
      geoCodingAPI: geoCodingAPI
    };

    function geoCodingAPI(address) {
      return $http.get('https://maps.googleapis.com/maps/api/geocode/json', {params: {address: address, key: "AIzaSyDC_OIDSl6curjCMCLyzn2yhMmg-er5knI"}}).
      then(function(response){
        return response;
      });
    }    
  }

})();
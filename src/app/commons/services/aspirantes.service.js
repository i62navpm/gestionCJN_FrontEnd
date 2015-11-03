(function() {
  'use strict';

  angular
    .module('app')
    .factory('aspirantesService', aspirantesService);

  function aspirantesService($resource, $location, $filter) {
    return {
      aspirantesRest: aspirantesRest
    };

    function aspirantesRest() {
      return $resource('http://127.0.0.1:'+$location.port()+'/api/aspirantes/:id.json:json', null, {
        'query':  {method:'GET', isArray: true},
        'get':    {method:'GET', transformResponse: function(data, headersGetter) {
                                                      return $filter('stringToDateFormat')(angular.fromJson(data));
                                                    }
                  },
        'save':   {method:'POST', transformRequest: function(data, headersGetter) {
                                                      return angular.toJson($filter('formatDates')($filter('removeNulls')(data)));
                                                    }
                  },
      });
    }
   
  }

})();
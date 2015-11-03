(function() {
  'use strict';

  angular
    .module('app')
    .factory('autoridadesService', autoridadesService);

  function autoridadesService($resource, $location, $filter) {
    return {
      autoridadesRest: autoridadesRest
    };

    function autoridadesRest() {
      return $resource('http://127.0.0.1:'+$location.port()+'/api/autoridades/:id.json:json', null, {
        'query':  {method:'GET', isArray: true},
        'save':   {method:'POST', transformRequest: function(data, headersGetter) {
                                                      return angular.toJson($filter('removeNulls')(data));
                                                    }
                  },
      });
    }
   
  }

})();
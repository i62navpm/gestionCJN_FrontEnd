(function() {
  'use strict';

  angular
    .module('app')
    .factory('directivosService', directivosService);

  function directivosService($resource, $location, $filter) {
    return {
      directivosRest: directivosRest
    };

    function directivosRest() {
      return $resource('http://127.0.0.1:'+$location.port()+'/api/directivos/:id.json:json', null, {
        'query':  {method:'GET', isArray: true},
        'save':   {method:'POST', transformRequest: function(data, headersGetter) {
                                                      return angular.toJson($filter('removeNulls')(data));
                                                    }
                  },
      });
    }
   
  }

})();
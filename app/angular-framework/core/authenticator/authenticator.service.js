(function() {
  'use strict';

  angular.module('core.authenticator')
  .factory('Authenticator', ['$resource', 'localStorageService', Authenticator]);

  function Authenticator($resource, localStorageService) {
    return $resource('', {}, {
      register: {
        method: 'POST',
        url: 'http://smktesting.herokuapp.com/api/register/ '
      },
      login: {
        method: 'POST',
        url: 'http://smktesting.herokuapp.com/api/login/ '
      }
    });

  };
  
})();
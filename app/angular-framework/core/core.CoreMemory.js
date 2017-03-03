(function() {
  'use strict';

  angular.module('core').
  factory('CoreMemory', ['localStorageService', CoreMemory]);

  function CoreMemory(localStorageService) {
    return {
      saveToken: function(token) {localStorageService.set('token', token);},
      loadToken: function() {return localStorageService.get('token');},
      saveUsername: function(username) {localStorageService.set('username', username);},
      loadUsername: function() {return localStorageService.get('username');}
    };
  }
})();
(function() {
  'use strict';

  angular.module('register')
  .component('register', {
    templateUrl: 'angular-framework/reg/register.template.html',
    controller: ['Authenticator', RegisterController]
  });

  function RegisterController(Authenticator) {
    var self = this;
    
    self.success = false;
    self.sendData = sendData;

    /////

    function sendData() {
      Authenticator.register({}, {
          "username": self.user.username,
          "password": self.user.password
        }, function(response){
          self.success = response.success;
        });
    };

  };

})();
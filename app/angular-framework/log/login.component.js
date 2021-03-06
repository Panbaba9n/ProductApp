(function() {
  'use strict';

  angular.module('login')
  .component('login', {
    templateUrl: 'angular-framework/log/login.template.html',
    controller: ['CoreMemory', 'Authenticator', LoginController]
  });

  function LoginController(CoreMemory, Authenticator) {
    var self = this;

    self.message = false;
    self.success = false;
    self.token = CoreMemory.loadToken();
    self.sendData = sendData;

    /////

    function sendData() {
      Authenticator.login({}, {
          "username": self.user.username,
          "password": self.user.password
        }, function(response){
          self.message = response.message;
          self.success = response.success;
          saveToken(response.token);
        });
      saveUsername(self.user.username);
    };

    function saveToken(token) {
      return CoreMemory.saveToken(token);
    };
    function saveUsername(username) {
      return CoreMemory.saveUsername(username);
    };          

  };

})();
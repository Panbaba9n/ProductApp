(function() {
  'use strict';

  angular.module('rating')
  .controller('RatingCtrl', ['$scope', RatingCtrl]);

  function RatingCtrl($scope) {
    $scope.rate = 0;
    $scope.max = 5;
    $scope.isReadonly = false;

    $scope.hoveringOver = function(value) {
      $scope.overStar = value;
      $scope.percent = value;

    };

    $scope.ratingStates = [    
    {stateOn: 'fa fa-star', stateOff: 'fa fa-star-o'},
    {stateOff: 'glyphicon-off'}
    ]
  };

})();
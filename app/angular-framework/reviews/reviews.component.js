(function() {
  'use strict';

  angular.module('reviewsList')
  .component('reviewsList', {
    templateUrl: 'angular-framework/reviews/reviews.template.html',
    controller: ['$routeParams','Reviews', 'CoreMemory', ReviewsListController]
  });

  function ReviewsListController($routeParams, Reviews, CoreMemory) {
    var self = this
    self.reviews = {};
    self.token = CoreMemory.loadToken(); // lolol
    self.productId = $routeParams.productId;
    self.username = CoreMemory.loadUsername();
    self.sendetReview = false;
    self.notAutorised = false;
    

    self.getReview = function getReviews() {
      self.reviews = Reviews.getOverHere().query({productId: self.productId});
    };
    self.getReview();

    /**
    * New Review
    **/
    self.getStarRate = function getStarRate() {
      var scope = angular.element($("#starRate")).scope();
      return self.rate = scope.percent;
    };

    self.sendReview = function() {
      self.getStarRate();
      Reviews.getOverHere().send({
        productId: self.productId
      }, {
        'rate': self.rate,
        'text': self.usertext        
      }, function() {
        self.getReview(); 
        $('#review-content').val("");
      });

    };

  };

})();
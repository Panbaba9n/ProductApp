(function() {
  'use strict';

  angular.module('reviewsList')
  .component('reviewsList', {
    templateUrl: 'angular-framework/reviews/reviews.template.html',
    controller: ['$routeParams','Reviews', 'CoreMemory', ReviewsListController]
  });

  function ReviewsListController($routeParams, Reviews, CoreMemory) {
    var self = this;

    self.reviews = {};    
    self.productId = ""; 
    self.username = "";
    self.token = "";
    self.rate = "";
    self.usertext = "";
    self.sendReview = sendReview;

    getReviews();
    initNewReview();

    /////

    function getReviews() {
      getProductId();      
      return self.reviews = Reviews.getOverHere().query({productId: self.productId});
    }

    function getProductId() {
      self.productId = $routeParams.productId;
    };

    /**
    * New Review
    **/
    function initNewReview() {
      getUsername();
      getToken();
    };

    function sendReview() {
      getStarRate();
      Reviews.getOverHere().send({
        productId: self.productId
      }, {
        'rate': self.rate,
        'text': self.usertext        
      }, function() {
        getReviews(); 
        $('#review-content').val("");
      });
    };

    function getStarRate() {
      var scope = angular.element($("#starRate")).scope();
      return self.rate = scope.percent;
    };

    function getUsername() {
      self.username = CoreMemory.loadUsername();
    };

    function getToken() {
      self.token = CoreMemory.loadToken();
    };

  };

})();
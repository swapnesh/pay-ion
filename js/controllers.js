angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, PaypalService) {
  var self = this;
  self.payment = function(num) {
    //To use this service
    PaypalService.initPaymentUI().then(function () {
      //console.log(num);
      $scope.here = "I am here";
      PaypalService.makePayment(num, "Total").then(function(data){
        console.log("====");
        $scope.data = data;
      })
    });

  };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

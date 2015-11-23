angular.module('footballNews')
.controller('NavCtrl', ['$scope', 'Auth', function ($scope, Auth) {

  Auth.currentUser().then(function(user) {
    $scope.user = user;
  });

  $scope.on('devise:new-registration', function(e, user) {
    $scope.user = user;
  });

  $scope.on('devise:login', function(e, user) {
    $scope.user = user;
  });

  $scope.on('devise:logout', function(e, user) {
    $scope.user = user;
  });

  $scope.signedIn = Auth.isAuthenticated;
  $scope.logout = Auth.logout;
}])

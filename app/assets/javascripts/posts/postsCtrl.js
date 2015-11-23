angular.module('footballNews')

.controller('PostsCtrl', ['$scope', 'posts', 'post', function($scope, posts, post){

  $scope.post = post;

  $scope.addComment = function() {
    if($scope.body === '') { return; }
    posts.addComment({
      body: $scope.body,
      author: 'user',
      votes:0
    }).success(function(comment) {
      $scope.post.comments.push(comment);
    });
    $scope.body = '';
  };

  $scope.incrementVotes = function(comment) {
    posts.upvoteComment(post, comment);
  }

}])

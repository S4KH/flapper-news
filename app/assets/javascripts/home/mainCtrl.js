angular.module('footballNews')

.controller('MainCtrl', ['$scope', 'posts',  function ($scope, posts) {

  $scope.posts = posts.posts;

  // add to posts array
  $scope.addPost = function() {
    if(!$scope.title || !$scope.title ===''){return;}

    posts.create({
      title: $scope.title,
      link: $scope.link
    });
    $scope.title = '';
    $scope.link = '';
  }

  // increase vote for the post
  $scope.incrementVotes = function(post){
    posts.upvote(post);
  }
}])

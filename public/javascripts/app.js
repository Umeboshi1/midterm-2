angular.module('comment', [])
.controller('MainCtrl', [
  '$scope','$http',
  function($scope,$http){
    $scope.comments = [];
    $scope.addComment = function() {
      var newcomment = {title:$scope.formContent,price:$scope.price,url:$scope.url};
      $scope.formContent='';
	    $scope.price='';
	    $scope.url='';
      $http.post('/comments', newitem).success(function(data){
        $scope.comments.push(data);
      });
    };
    $scope.delete = function(item) {
      $http.delete('/comments/' + comment._id)
        .success(function(data) {
          console.log("delete worked");
          });
      $scope.getAll();
    };
    /*$scope.upvote = function(item) {
      return $http.put('/items/' + item._id + '/upvote')
        .success(function(data){
          console.log("upvote worked");
          comment.upvotes = data.upvotes;
        });
    };
	$scope.incrementUpvotes = function(comment) {
	  $scope.upvote(comment);
    };*/
    $scope.getAll = function() {
      return $http.get('/comments').success(function(data){
        angular.copy(data, $scope.comments);
      });
    };
    $scope.getAll();

  }
]);

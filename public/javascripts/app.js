angular.module('comment', [])
.controller('MainCtrl', [
  '$scope','$http',
  function($scope,$http){
    $scope.comments = [];
    $scope.addComment = function() {
      var newcomment = {title:$scope.formContent,price:$scope.formPrice,url:$scope.formUrl};
      $scope.formContent='';
	    $scope.formPrice='';
	    $scope.formUrl='';
      $http.post('/comments', newcomment).success(function(data){
        $scope.comments.push(data);
      });
    };
    $scope.delete = function(comment) {
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

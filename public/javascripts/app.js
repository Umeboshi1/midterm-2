angular.module('item', [])
.controller('MainCtrl', [
  '$scope','$http',
  function($scope,$http){
    $scope.items = [];
    $scope.addItem = function() {
      var newitem = {title:$scope.formContent,price:$scope.price,url:$scope.url};
      $scope.formContent='';
	    $scope.price='';
	    $scope.url='';
      $http.post('/items', newitem).success(function(data){
        $scope.items.push(data);
      });
    };
    $scope.delete = function(item) {
      $http.delete('/items/' + item._id)
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
      return $http.get('/items').success(function(data){
        angular.copy(data, $scope.items);
      });
    };
    $scope.getAll();

  }
]);

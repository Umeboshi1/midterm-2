angular.module('comment',[])
.controller('MainCtrl',[
'$scope',
function($scope) {
  $scope.comments = [];
  $scope.addComment = function() {
      $scope.comments.push({title:$scope.formContent,upvotes:0});
      $scope.formContent='';
    };
  $scope.incrementUpVotes = function(comment) {
    $scope.upvotes+=1;
}
});
   

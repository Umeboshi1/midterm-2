angular.module('item',[])
.controller('MainCtrl',[
'$scope',
function($scope) {
  $scope.items = [];
  $scope.addItem = function() {
      $scope.items.push({title:$scope.formContent,upvotes:0});
      $scope.formContent='';
    };
  $scope.incrementUpVotes = function(comment) {
    $scope.upvotes+=1;
}
});
   

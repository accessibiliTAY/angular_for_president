var app = angular.module('whosGonnaWin', []);

app.controller('listCandidates', function($scope, $http) {
  $scope.democrats = [];
  $scope.republicans = [];

  $scope.addDems = function() {
    $http.get('/democrats').then(function(response) {
      $scope.hitButton = true;
      console.log(response);
      $scope.democrats = response.data;
    });
  }
  $scope.addReps = function() {
    $http.get('/republicans').then(function(response) {
      $scope.buttonHit = true,
        console.log(response);
      $scope.republicans = response.data;
    })
  }
// });
// app.controller('postWinner',function($scope, $http){
//   $scope.winner = [];
  $scope.addWinner = function(){
  $http.get('/winner').then(function(response){
    $scope.buttonClick = true;
      console.log(response);
    $scope.winner = response.data;
  })
}
});

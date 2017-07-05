function MainController($scope){
  $scope.name = "Test"
}

angular
  .module('app')
  .controller('MainController', MainController)

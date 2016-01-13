import angular from 'angular';

export function AppController($scope) {
  $scope.name = 'Just trying out some shit its been so long...';

  console.log($scope);
}

angular.module("crowdfileApp", [])
  .controller('AppController', AppController);

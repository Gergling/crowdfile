import angular from 'angular';

angular.module('application').config(($stateProvider) => {
  $stateProvider.state('dashboard', {
      url: '/',
      templateUrl: 'dashboard/index.html',
      controller: 'dashboardController'
    })
    .state('404', {
      url: '/*path',
      templateUrl: 'application/404.html'
    });
});

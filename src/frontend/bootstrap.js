import angular from 'angular';

const applicationModuleName = 'crowdfile';
const applicationModuleVendorDependencies = [
  'ngResource',
  'ngAnimate',
  'ngMessages',
  'ui.router'
];

angular.bootstrap(window.document, [applicationModuleName]);

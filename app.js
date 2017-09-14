var mossville = angular.module("mossville", ['ngRoute', 'ngSanitize']);

mossville.config(function ($routeProvider) {
  $routeProvider
  .when('/home', {
    controller: 'homeCtrl',
    controllerUrl: 'components/home/homeCtrl.js',
    templateUrl: 'components/home/home.html'
  })
  .when('/slider', {
    controller: 'sliderCtrl',
    controllerUrl: 'components/slider/sliderCtrl.js',
    templateUrl: 'components/slider/slider.html'
  })
  .otherwise({redirectTo: '/home'})
})

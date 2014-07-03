var starterApp = angular.module("StarterApp", ["ngRoute"]);

starterApp.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'app/views/home.html',
        controller: 'HomeCtrl'
    })
    .when('/about', {
        templateUrl: 'app/views/about.html',
        controller: 'AboutCtrl'
    })
    .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
});
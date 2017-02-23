angular.module('myApp').
    config(['$locationProvider', '$routeProvider', function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
        when('/home', {
            template: '<home-view></home-view>'
        }).
        when('/about', {
            template: '<about-view></about-view>'
        }).
        otherwise('/home');
        }
    ]);
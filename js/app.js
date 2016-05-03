'use strict';

var RedPen = angular.module('RedPen', [
    'ngRoute',
    'manePageControllers'
]);

RedPen.config(['$routeProvider',
    function($routeProvider){
        $routeProvider
            .when('/main', {
                templateUrl: 'html/index.html',
                controller: 'GreatingCtrl'
            })
            .otherwise({
                redirectTo: '/main'
            })
    }
]);
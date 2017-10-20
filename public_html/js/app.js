'use strict';
//definicao da dependencia ngRoute para as rotas funcionarem e nome do modulo de controladores
var angularApp = angular.module('angularApp', [
    'ngRoute', 
    'angularControllers'
    ]);
//definicao das rotas
angularApp.config(['$routeProvider', '$locationProvider', 
    function($routeProvider, $locationProvider){
        $routeProvider.
                when('/',  {
                    templateUrl:'partials/main.html', 
                    controller:'mainControl'
                }).when('/show', {
                    templateUrl:'partials/show.html',
                    controller:'showControl'
                });
        $locationProvider.html5Mode(false).hashPrefix('!');
    }
]);

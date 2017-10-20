'use strict';

var angularControllers = angular.module('angularControllers', []);
angularControllers.controller('mainControl', ['$scope', '$location', '$http',
    function mainControl($scope, $location, $http){
        $scope.message = "Ola Pessoal";
    }
]);

angularControllers.controller('showControl', ['$scope', '$location', '$http',
    function showControl($scope, $location, $http){
        $scope.message = "Ola a todos";
    }
]);
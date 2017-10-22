'use strict';

var angularControllers = angular.module('angularControllers', []);
angularControllers.controller('mainControl', ['$scope', '$location', '$http',
    function mainControl($scope, $location, $http){
        $scope.nome = "Israel Gomes";
        $scope.idade = 23;
        //funcao que estara no escopo do html para ser acessada do próprio local
        $scope.atualizarDados = function(){
            $scope.nome = $scope.NOME;
            $scope.idade = $scope.IDADE;
        };
    }
]);

angularControllers.controller('showControl', ['$scope', '$location', '$http',
    function showControl($scope, $location, $http){
        $scope.nome = "Israel Gomes";
    }
]);
angularControllers.controller('addControl', ['$scope', '$location', 'checkCreds', 'userList', '$http', 'getToken', 
    function addControl($scope, $location, checkCreds, userList, $http, getToken){
        if (checkCreds() != true){
            $location.path('/loginForm');
        }
        $http.defaults.headers.common['Authorization'] = 'Basic '+ getToken();
        userList.getList({},
            function success(response){
                console.log("Success: " + JSON.stringify(response));
                $scope.userList = response;
            },
            function error(errorResponse){
                console.log("Error: "+ JSON.stringify(errorResponse));
            }
        );
        $scope.userListClass = "active";
    }
]);
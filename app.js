(function() {
    var app = angular.module('app', ['ngRoute']);
    app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/acceso', {
                templateUrl: 'acceso.tpl.html',
                controller: 'FormCtrl'
            })
            .when('/notfound', {
                templateUrl: 'notFound.tpl.html',
                //controller: 'FormCtrl'
            })
            .when('/inicio', {
                templateUrl: 'list.tpl.html',
                controller: 'InicioCtrl'
            })
            /*.when('/report', {
                templateUrl: 'report.tpl.html',
                controller: 'ReportCtrl',
                resolve: {
                    reportdata: ['$http', function($http) {
                        return $http.get('report.json').then(function(data) {
                            return data.data;
                        });
                    }]
                }
            })*/
            .otherwise({ redirectTo: '/acceso' });
        /*$locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });*/
    }]);
    app.controller('FormCtrl', ['$scope', '$location', 'UserData', function($scope, $location, UserData) {
        $scope.datos = UserData;
        var user = "emilianomacias0@gmail.com";
        var password = "regina";
        $scope.submit = function() {
            if ($scope.datos.usuario == user && $scope.datos.contrasena == password) {
                alert("Login Succesfull");
                $scope.datos;
                $scope.datos = {};
                $location.url('/inicio');
            } else {
                console.log("Verificar datos de acceso");
            }

        }
    }]);

    app.controller('InicioCtrl', ['$scope', 'UserData', function($scope, UserData) {
        $scope.datos = UserData;
    }]);
    //Service
    app.factory('UserData', function() {
        var data = {
            usuario: '',
            contrasena: ''
        };
        return data;
    });
})();
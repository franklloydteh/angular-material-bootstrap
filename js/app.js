define([
    'jquery',
    'angular',
    'angularResource',
    'angularRoute',
    'directives/menu'
], function ($, angular) {

    angular.module('MaterialBootstrap', [
        "ngRoute",
        "material.directive.menu"
    ])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'view/home.html'
                })
                .otherwise({ redirectTo: '/' });
        }])
        .controller('MainController', ['$rootScope', '$location', '$http',
            function ($rootScope, $location, $http, permissions) {
                $rootScope.$on("$routeChangeSuccess", function () {
                    $rootScope.loading = false;
                });
                $rootScope.userAgent = navigator.userAgent;
                $rootScope.today = new Date();
            }]);

    angular.bootstrap(document, ['MaterialBootstrap']);
});

define([
    'jquery',
    'angular',
    'angularResource',
    'angularRoute',
    'angularBootstrap',
    'directives/menu',
    'directives/tile'
], function ($, angular) {

    angular.module('MaterialBootstrap', [
        "ngRoute",
        "ui.bootstrap",
        "material.directive.menu",
        "material.directive.tile"
    ])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'view/home.html'
                })
                .when('/tile', {
                    templateUrl: 'view/ui-tile.html'
                })
                .when('/card', {
                    templateUrl: 'view/ui-card.html'
                })
                .when('/collapse', {
                    templateUrl: 'view/ui-collapse.html'
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

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
                .when('/dropdown', {
                    templateUrl: 'view/ui-dropdown.html'
                })
                .when('/modal', {
                    templateUrl: 'view/ui-modal.html'
                })
                .otherwise({ redirectTo: '/' });
        }])
        .controller('MainController', ['$rootScope', '$modal',
            function ($rootScope, $modal) {
                $rootScope.openModal = function (name, wClass) {
                    $modal.open({
                        templateUrl: 'view/modal/' + name + '.html',
                        windowClass: wClass
                    });
                }
            }]);

    angular.bootstrap(document, ['MaterialBootstrap']);
});

define(['angular'], function (angular) {
    angular
        .module('material.directive.menu', [])
        .directive('menuToggle', function () {
            return {
                restrict: 'C',
                link: function (scope, element, attrs) {
                    function resetMenus() {
                        var $bd = angular.element('body');
                        $bd.removeClass('menu-open');
                        $bd.removeClass('nav-drawer-open');
                        angular.element('.menu-toggle').closest('li.active').removeClass('active');
                        angular.element('.menu.open .menu-search-focus').blur();
                        angular.element('.menu.open').removeClass('open');
                    }

                    // menu close
                    angular.element(document).on('click', function (e) {
                        var $target = angular.element(e.target);
                        if (angular.element('.menu.open').length && !$target.is('.fbtn-container *, .menu *')) {
                            resetMenus();
                        }
                    });

                    // menu open
                    element.on('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        var $this = element,
                            $thisLi = $this.closest('li'),
                            $thisMenu = angular.element(attrs.href);

                        if ($thisLi.hasClass('active')) {
                            resetMenus();
                        } else {
                            resetMenus();
                            if ($thisMenu.hasClass('nav-drawer')) {
                                angular.element('body').addClass('nav-drawer-open');
                            } else {
                                angular.element('body').addClass('menu-open');
                            }
                            $thisLi.addClass('active');
                            $thisMenu.addClass('open');
                            if (angular.element('.menu.open .menu-search-focus').length) {
                                angular.element('.menu.open .menu-search-focus').focus();
                            }
                        }
                    });
                }
            };
        })
});

(function () {

    require.config({
        baseUrl: 'js',
        paths: {
            jquery: '../node_modules/jquery/dist/jquery',
            angular: '../node_modules/angular/angular',
            angularResource: '../node_modules/angular-resource/angular-resource',
            angularRoute: '../node_modules/angular-route/angular-route',
            angularBootstrap: '../node_modules/angular-ui-bootstrap/ui-bootstrap-tpls'
        },
        shim: {
            angular: { deps: ['jquery'], exports: 'angular' },
            angularResource: {deps: ['angular'] },
            angularRoute: { deps: ['angular'] },
            angularBootstrap: { deps: ['angular'] }
        }
    });

    require(['app'], function () {
        console.log('Done Loading');
    });
})();

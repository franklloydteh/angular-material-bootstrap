(function () {

    require.config({
        baseUrl: 'js',
        paths: {
            jquery: '../node_modules/jquery/dist/jquery',
            angular: '../node_modules/angular/angular',
            angularResource: '../node_modules/angular-resource/angular-resource',
            angularRoute: '../node_modules/angular-route/angular-route'
        },
        shim: {
            angular: { deps: ['jquery'], exports: 'angular' },
            angularResource: {deps: ['angular'] },
            angularRoute: { deps: ['angular'] }
        }
    });

    require(['app'], function () {
        console.log('Done Loading');
    });
})();

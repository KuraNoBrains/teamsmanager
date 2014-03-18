(function (angular) {
    'use strict'

    angular
        .module('my-app', [
            'ui.router',
            'ui.bootstrap',
            
            'my-app.common',
            'my-app.main'
        ])
        .config(Config)
        .run(Run)

    Config.$inject = ['$urlRouterProvider', '$locationProvider']
    
    function Config( $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(false)
        $urlRouterProvider.otherwise('/')
    }

    Run.$inject = ['$rootScope', 'appService']
    
    function Run( $rootScope, appService) {
        $rootScope.app = appService
    }

}(window.angular))


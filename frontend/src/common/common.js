(function (angular) {
    'use strict'

    angular
        .module('my-app.common', [
            'my-app.common.constants',
            'my-app.common.alerts',
            'my-app.common.teams',
            'my-app.common.employees'
        ])
        .config(Config)

    Config.$inject = []
    
    function Config() {

    }

}(window.angular))

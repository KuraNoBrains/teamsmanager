(function (angular) {
    'use strict'

    angular
        .module('my-app.common', [
            'my-app.common.app-version',
            'my-app.common.constants',
            'my-app.common.teams',
            'my-app.common.employees',
            'my-app.common.typeahead'
        ])
        .config(Config)

    Config.$inject = []
    
    function Config() {

    }

}(window.angular))

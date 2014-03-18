(function (angular) {
    'use strict'

    angular
        .module('my-app.common.employees', ['ngResource'])
        .config(Config)

    Config.$inject = []
    
    function Config() {

    }

}(window.angular))

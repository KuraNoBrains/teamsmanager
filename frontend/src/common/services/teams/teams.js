(function (angular) {
    'use strict'

    angular
        .module('my-app.common.teams', ['LocalStorageModule'])
        .config(Config)

    Config.$inject = []
    
    function Config() {

    }

}(window.angular))

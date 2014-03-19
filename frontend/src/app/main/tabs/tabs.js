(function(angular) {
    'use strict'

    angular
        .module('my-app.tabs', ['my-app.tabs.tab1', 'my-app.tabs.tab2'])
        .config(Config)

    Config.$inject = []

    function Config() {

    }

}(window.angular))
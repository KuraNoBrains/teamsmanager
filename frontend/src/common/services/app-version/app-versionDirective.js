(function (angular) {
    'use strict';

    angular
        .module('my-app.common.app-version')
        .directive('appVersion', AppVersion);

    AppVersion.$inject = ['version'];
    function AppVersion(   version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }

}(window.angular));
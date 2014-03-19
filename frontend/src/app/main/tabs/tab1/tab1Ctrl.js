(function (angular) {
    'use strict'

    angular
        .module('my-app.tabs.tab1')
        .controller('Tab1Ctrl', Tab1Ctrl)

    Tab1Ctrl.$inject = ['$rootScope', '$scope', 'employees', 'TeamsService']
    
    function Tab1Ctrl($rootScope, $scope, employees, TeamsService) {
        
    }

}(window.angular))

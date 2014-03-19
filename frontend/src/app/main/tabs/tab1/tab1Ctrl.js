(function (angular) {
    'use strict'

    angular
        .module('my-app.tabs.tab1')
        .controller('Tab1Ctrl', Tab1Ctrl)

    Tab1Ctrl.$inject = ['$scope', 'employees', 'TeamsService']
    
    function Tab1Ctrl($scope, employees, TeamsService) {
        
        $scope.teams = TeamsService.getTeams()
        
    }

}(window.angular))

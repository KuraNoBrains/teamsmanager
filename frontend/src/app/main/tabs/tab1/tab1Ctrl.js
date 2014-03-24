(function (angular) {
    'use strict'

    angular
        .module('my-app.tabs.tab1')
        .controller('Tab1Ctrl', Tab1Ctrl)

    Tab1Ctrl.$inject = ['$scope', 'employees', 'TeamsService', 'AlertsService', 'AppConfig']
    
    function Tab1Ctrl($scope, employees, TeamsService, AlertsService, AppConfig) {

        $scope.employees = employees.data
        $scope.teams = TeamsService.teams
        $scope.activeTeam = TeamsService.activeTeam
        $scope.employeesInActiveTeam = TeamsService.employeesInActiveTeam
        
//        $scope.$on("employeesInActiveTeam_update", function(){
//            $scope.employeesInActiveTeam = TeamsService.employeesInActiveTeam
//        })
        
        $scope.typeaheadOpts = {
//            templateUrl: 'app/main/tabs/tab1/tab1.tags.tpl.html',
//            templateUrl: '../vendor/angular-tags/templates/tags.html',
            popoverTitle: AppConfig.employeesDetailedInfoTitle,
            popoverText: AppConfig.employeesDetailedInfoText
//            onSelect: myOnSelectFunction
        }
        
    }

}(window.angular))

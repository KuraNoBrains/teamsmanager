(function (angular) {
    'use strict'

    angular
        .module('my-app.teams')
        .controller('TeamsCtrl', TeamsCtrl)

    TeamsCtrl.$inject = ['$scope', 'TeamsService', 'AppConfig', 'AlertsService']
    
    function TeamsCtrl($scope, TeamsService, AppConfig, AlertsService) {

        $scope.teams = TeamsService.teams
        
        $scope.employeeTips = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. \n\
                                Aenean commodo ligula eget dolor. Aenean massa. \n\
                                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. \n\
                                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. \n\
                                Nulla consequat massa quis enim. \n\
                                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, etc...'

        $scope.addTeam = function(teamName) {
            if ($scope.teamForm.$valid) {
                TeamsService.addTeam(teamName)
                $scope.teamName = ''
                $scope.teamForm.$setPristine(true)
                AlertsService.add(AppConfig.alerts.types.infoType, AppConfig.alerts.messages.projectAdded)
            }
        }

        $scope.deleteTeam = function(team) {
            TeamsService.deleteTeam(team)
            AlertsService.add(AppConfig.alerts.types.infoType, AppConfig.alerts.messages.projectDeleted)
        }
        
        $scope.deleteEmployeeFromTeam = function(employee, team) {
            TeamsService.deleteEmployeeFromTeam(employee, team)
            AlertsService.add(AppConfig.alerts.types.infoType, AppConfig.alerts.messages.employeeDeleted)
        }

    }

}(window.angular))

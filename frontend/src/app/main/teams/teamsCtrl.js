(function (angular) {
    'use strict'

    angular
        .module('my-app.teams')
        .controller('TeamsCtrl', TeamsCtrl)

    TeamsCtrl.$inject = ['$scope', 'TeamsService']
    
    function TeamsCtrl($scope, TeamsService) {

        $scope.teams = TeamsService.teams

        $scope.getRandomInt = function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min
        }

        $scope.addTeam = function(teamName) {
            if ($scope.teamForm.$valid) {
                var newTeam = {
                    id: $scope.getRandomInt(0, 100000000000),
                    title: teamName,
                    isActive: true,
                    employees: []
                }
                $scope.teamName = ''
                $scope.teamForm.$setPristine(true)

                TeamsService.addTeam(newTeam)
                
//                alertService.add(AppConfig.alerts.types.infoType, AppConfig.alerts.messages.projectAdded)
            }
        }

        $scope.deleteTeam = function(project) {
            
//            projectsStorage.deleteProject(project)
//            alertService.add(AppConfig.alerts.types.infoType, AppConfig.alerts.messages.projectDeleted)
            
        }

    }

}(window.angular))

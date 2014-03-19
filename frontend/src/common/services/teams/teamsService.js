(function (angular) {
    'use strict'

    angular
        .module('my-app.common.teams')
        .service('TeamsService',

            function(localStorageService) {
                
                var teamService = {}
                
                teamService.getTeams = function() {
                    return localStorageService.get("teams") || []
                }
                
                teamService.getActiveTeam = function() {
                    return {}
                }
                
                teamService.saveTeams = function(){
                    localStorageService.add("teams", JSON.stringify(teamService.teams))
                }
                
                teamService.addTeam = function(team){
                    teamService.teams.push(team)
                    teamService.saveTeams()
                }
                
                teamService.addEmployeeToTeam = function(employee, team){
                     for (var i in teamService.teams) {
                        if (teamService.teams[i].id == team.id) {
                            teamService.teams[i].employees.push(employee.entity)
                            break
                        }
                    }
                    teamService.saveTeams()
                }
                
                teamService.teams = teamService.getTeams()
                teamService.activeTeam = teamService.getActiveTeam()
                
                return teamService
            })

}(window.angular))          
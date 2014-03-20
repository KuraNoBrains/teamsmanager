(function (angular) {
    'use strict'

    angular
        .module('my-app.common.teams')
        .service('TeamsService',

            function($rootScope, localStorageService) {
                
                var teamService = {}
                
                teamService.getTeams = function() {
                    return localStorageService.get("teams") || []
                }
                
                teamService.saveTeams = function() {
                    $rootScope.$broadcast('updateTeams', teamService.teams)
                    console.log('updateTeams', teamService.teams)
                    localStorageService.add("teams", JSON.stringify(teamService.teams))
                }
                
                teamService.getRandomInt = function(min, max) {
                    return Math.floor(Math.random() * (max - min + 1)) + min
                }
                
                teamService.addTeam = function(teamName) {
                    var newTeam = {
                        id: teamService.getRandomInt(0, 100000000000),
                        title: teamName,
                        isActive: true,
                        employees: []
                    }
                    teamService.teams.push(newTeam)
                    teamService.saveTeams()
                }
                
                teamService.deleteTeam = function(team) {
                    if (teamService.teams.indexOf(team) != -1) {
                        teamService.teams.splice(teamService.teams.indexOf(team), 1)
                    }
                    teamService.saveTeams()
                }
                
                teamService.addEmployeeToActiveTeam = function(employee, fromDirective) {
                    var activeTeam = teamService.getActiveTeam()
                    if (!_.isEmpty(activeTeam)) {
                        if ( _.indexOf(activeTeam.employees, employee.entity) != -1 ) {
                            return { isError: true, errorCode: 2}
                        } else {
                            teamService.addEmployeeToTeam(employee, activeTeam, fromDirective)
                            return { isError: false}
                        }
                    } else {
                        return { isError: true,  errorCode: 1}
                    }
                }
                
                teamService.getActiveTeam = function() {
                    var keepGoing = true
                    var activeTeam = {}
                    angular.forEach(teamService.teams, function(team) {
                        if(keepGoing) {
                            if (team.isActive === true) {
                                activeTeam = team
                                keepGoing = false
                            }
                        }
                    })
                    return activeTeam
                }
                
                teamService.addEmployeeToTeam = function(employee, activeTeam, fromDirective) {
                    var keepGoing = true
                    angular.forEach(teamService.teams, function(team) {
                        if(keepGoing) {
                            if (team.id == activeTeam.id) {
                                if(fromDirective)
                                    team.employees.push(employee)
                                else
                                    team.employees.push(employee.entity)
                                teamService.saveTeams()
                                keepGoing = false
                            }
                        }
                    })
                }
                
                teamService.deleteEmployeeFromTeam = function(employee, team) {
                    for (var i in teamService.teams) {
                        if (teamService.teams[i].id == team.id) {
                            teamService.teams[i].employees.splice(team.employees.indexOf(employee), 1)
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
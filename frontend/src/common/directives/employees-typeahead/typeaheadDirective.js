(function(angular) {
    'use strict'

    angular
        .module('my-app.common.typeahead')
        .directive('employeesTypeaheadTagmanager', employeesTypeaheadTagmanager)

    employeesTypeaheadTagmanager.$inject = ['$rootScope', '$parse', 'TeamsService'] //+service

    function employeesTypeaheadTagmanager($rootScope, $parse, TeamsService) {

        return {
            restrict: 'A',
            replace: false,
//            transclude: 'true',
//            require: 'ngModelTeams',
            scope: true,
//            scope: {
//                ngModelTeams: '=',
//                ngModelEmployees: '=',
//                addEmployee: '&',
//                deleteEmployee: '&'
//            },
            
            controller: 'Tab1Ctrl',
            
            link: function(scope, element, attrs, ctrl) {

//                var addEmployeeToTeamInvoker = $parse(attrs.addEmployee)
//                var deleteEmployeeFromTeamInvoker = $parse(attrs.deleteEmployee)
                
                scope.teams = TeamsService.teams
                scope.activeTeam = {}
                scope.prefilledEmployees = []

                angular.forEach(scope.teams, function(team) {
                    if (team.isActive === true) {
                        scope.activeTeam = team
                    }
                })

                angular.forEach(scope.activeTeam.employees, function(employee) {
                    scope.prefilledEmployees.push(employee.name)
                })
                
                //TODO
                $rootScope.$on('updateTeams', function(args) {
                    scope.teams = TeamsService.teams
                    if(!scope.$$phase) { 
                        scope.$digest()
//                        scope.$apply()
                    }
                })
                
//                $scope.$eval
//                
//                attrs.$observe(
//                    "src",
//                    function( srcAttribute ) {
//                        logWithPhase( "$observe : " + srcAttribute )
//                    }
//                )

                
                
                
                
//                 scope.$watch(function () { return TeamsService.teams },
//                    function (newVal) {
//                        
//                        if (typeof newVal !== 'undefined') {
//                            console.log("employeesTypeaheadTagmanager - on", newVal)
//                            scope.teams = newVal
//                            angular.forEach(scope.teams, function(team) {
//                                if (team.isActive === true) {
//                                    scope.activeTeam = team
//                                }
//                            })
//                            angular.forEach(scope.activeTeam.employees, function(employee) {
//                                scope.prefilledEmployees.push(employee.name)
//                            })
//                        }
//                    }
//                )




                var tagApi = element.tagsManager({
                    prefilled: scope.prefilledEmployees
                })

                var name = new Bloodhound({
                    datumTokenizer: function(d) {
                        //return d.name
                        return Bloodhound.tokenizers.whitespace(d.name)
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace,
                    prefetch: 'common/services/employees/employees.json' //TODO: prefetch requires url to be set
                })

                name.initialize()

                element.typeahead({
                    highlight: true
                },
                {
                    name: 'name',
                    displayKey: 'name',
                    source: name.ttAdapter(),
                    templates: {
                        suggestion: Handlebars.compile([
                            '<p> {{name}} - {{age}} - {{job}} - {{grade}} </p>'
                        ].join(''))
                    }
                })

                element.on('typeahead:selected', function(event, data) {
//                    addEmployeeToTeamInvoker(scope, data)
//                    scope.addEmployeeToTeam(data)                   
                    
                    TeamsService.addEmployeeToActiveTeam(data, true)
                    
                    tagApi.tagsManager("pushTag", data.name)
                    element.typeahead('close')
                    
                    scope.$digest()
                })
                
                element.on('.tm-tag-remove:click', function(event, data) {
                    
                    console.log(event)
                    console.log(data)
                    
//                    addEmployeeToTeamInvoker(scope, data)
//                    scope.addEmployeeToTeam(data)                   
                    
//                    TeamsService.addEmployeeToActiveTeam(data, true)
//                    
//                    tagApi.tagsManager("pushTag", data.name)
//                    element.typeahead('close')
//                    
//                    scope.$digest()
                })
            }
        }
    }

}(window.angular))
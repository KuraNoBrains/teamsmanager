(function(angular) {
    'use strict'

    angular
        .module('my-app.common.typeahead')
        .directive('employeesTypeaheadTagmanager', employeesTypeaheadTagmanager)

    employeesTypeaheadTagmanager.$inject = ['$parse'] //+service

    function employeesTypeaheadTagmanager($parse) {

        return {
            restrict: 'A',
            replace: false,
            transclude: 'true',
//        require: 'ngModel',
//        scope: true,
            scope: {
//            projects: '=employeesTypeahead',
//            filter: '&',
                ngModel: '=',
                addEmployee: '&',
                deleteEmployee: '&'
            },

            link: function(scope, element, attrs, ctrl) {

                var addEmployeeToProjectInvoker = $parse(scope, attrs.addEmployee)
                var deleteEmployeeFromProjectInvoker = $parse(attrs.deleteEmployee)
                
                scope.teams = scope.ngModel

                console.log("employeesTypeaheadTagmanager")
                console.log(scope.teams)

               
//                scope.activeProject = {}
//                scope.prefilledEmployees = []
//
//                angular.forEach(scope.teams, function(team) {
//                    if (team.isActive === true) {
//                        scope.activeProject = team
//                    }
//                })
//
//                angular.forEach(scope.activeProject.employees, function(employee) {
//                    scope.prefilledEmployees.push(employee.name)
//                })

//                scope.$watch(attrs.ngModel, function(value) {
//                    console.log(value)
//                })


//            scope.$watch('prefilledEmployees', function(newValue) {
//                if (newValue === '') {
//                    element.typeahead('setQuery', '')
//                }
//            }, true)


//            scope.$watch('projects', function(newProjects) {
//                scope.projects = newProjects
//                scope.activeProject = projectsStorage.getActiveProject()
//                scope.prefilledEmployees = ["Angola2", "Laos2", "Nepal2"]
//            }, true)

                var tagApi = element.tagsManager({
                    prefilled: scope.prefilledEmployees
                })

                var name = new Bloodhound({
                    datumTokenizer: function(d) {
                        //return d.name
                        return Bloodhound.tokenizers.whitespace(d.name)
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace,
                    prefetch: 'common/services/employees/employees.json' //TODO
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
                    addEmployeeToProjectInvoker(scope, data)
//                scope.addEmployeeToProject(data)
                    tagApi.tagsManager("pushTag", data.name)
                    element.typeahead('close')
//                    scope.$apply()
                })
            }
        }
    }

}(window.angular))
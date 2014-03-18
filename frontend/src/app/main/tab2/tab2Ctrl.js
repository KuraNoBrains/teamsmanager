(function(angular) {
    'use strict'

    angular
            .module('my-app.tab2')
            .controller('Tab2Ctrl', Tab2Ctrl)

    Tab2Ctrl.$inject = ['$rootScope', '$scope', 'simpleObj'] //$scope, staffStorage, projectsStorage, alertService, AppConfig

    function Tab2Ctrl($rootScope, $scope, simpleObj) {

        console.log("Tab2Ctrl")
        console.log(simpleObj.value)
        console.log(employees)

        $scope.employees = employees

        $scope.isCollapsed = false

//        $scope.projects = projectsStorage.projects
//        $scope.employees = staffStorage.getEmployees()

        $scope.filterOptions = {
            filterText: ''
        }

        $scope.gridOptions = {
            data: 'employees',
            rowTemplate: 'app/main/tab2/tab2.row.tpl.html',
            columnDefs: [
                {
                    field: 'name',
                    displayName: 'Full Name',
                    cellTemplate: 'app/main/tab2/tab2.cell.tpl.html'
                },
                {
                    field: 'age',
                    displayName: 'Age'
                },
                {
                    field: 'grade',
                    displayName: 'Grade'
                },
                {
                    field: 'job',
                    displayName: 'Job'
                }
            ],
            filterOptions: $scope.filterOptions,
            multiSelect: false
        }
//
//        $scope.addEmployeeToProject = function(employee) {
//
//            var activeProject = projectsStorage.getActiveProject()
//            if (!_.isEmpty(activeProject)) {
//
//                if (activeProject.employees.indexOf(employee) > -1) {
//                    alertService.add(AppConfig.alerts.types.errorType, AppConfig.alerts.messages.employeeDuplicateError)
//                } else {
//                    projectsStorage.addEmployeeToProject(employee, activeProject)
//                    alertService.add(AppConfig.alerts.types.infoType, AppConfig.alerts.messages.employeeAdded)
//                }
//            } else {
//                alertService.add(AppConfig.alerts.types.errorType, AppConfig.alerts.messages.employeeAddError)
//            }
//        }
//
//        $scope.deleteEmployeeFromProject = function(employee, project) {
//            projectsStorage.deleteEmployeeFromProject(employee, project)
//            alertService.add(AppConfig.alerts.types.infoType, AppConfig.alerts.messages.employeeDeleted)
//        }

    }

}(window.angular))

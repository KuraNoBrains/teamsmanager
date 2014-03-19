(function(angular) {
    'use strict'

    angular
        .module('my-app.tabs.tab2')
        .controller('Tab2Ctrl', Tab2Ctrl)

    Tab2Ctrl.$inject = ['$scope', 'employees', 'TeamsService', 'AppConfig', 'AlertsService']

    function Tab2Ctrl($scope, employees, TeamsService, AppConfig, AlertsService) {

        $scope.isCollapsed = false
        $scope.employees = employees.data

        $scope.filterOptions = {
            filterText: ''
        }

        $scope.gridOptions = {
            data: 'employees',
            rowTemplate: 'app/main/tabs/tab2/tab2.row.tpl.html',
            columnDefs: [
                {
                    field: 'name',
                    displayName: 'Full Name',
                    cellTemplate: 'app/main/tabs/tab2/tab2.cell.tpl.html'
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

        $scope.addEmployeeToTeam = function(employee) {
            
            // TODO: promise
            
            var response = TeamsService.addEmployeeToActiveTeam(employee)
            if(response.isError){
                 switch(response.errorCode) {
                    case 1:
                        AlertsService.add(AppConfig.alerts.types.errorType, AppConfig.alerts.messages.employeeAddError)
                        break
                    case 2:
                        AlertsService.add(AppConfig.alerts.types.errorType, AppConfig.alerts.messages.employeeDuplicateError)
                        break
                 }
            } else {
                AlertsService.add(AppConfig.alerts.types.infoType, AppConfig.alerts.messages.employeeAdded)
            }
        }

    }

}(window.angular))

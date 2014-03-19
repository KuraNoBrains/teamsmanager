(function(angular) {
    'use strict'

    angular
        .module('my-app.tabs.tab2')
        .controller('Tab2Ctrl', Tab2Ctrl)

    Tab2Ctrl.$inject = ['$scope', 'employees', 'TeamsService', 'AppConfig', 'AlertsService']

    function Tab2Ctrl($scope, employees, TeamsService, AppConfig, AlertsService) {

        $scope.isCollapsed = false
        $scope.employees = employees.data
        
        $scope.AppConfig = AppConfig
        $scope.employeeTips = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. \n\
                                Aenean commodo ligula eget dolor. Aenean massa. \n\
                                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. \n\
                                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. \n\
                                Nulla consequat massa quis enim. \n\
                                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, etc...'

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
            
            // TODO: use promise instead
            
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

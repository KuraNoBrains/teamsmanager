(function(angular) {
    'use strict'

    angular
        .module('my-app.tabs.tab2')
        .controller('Tab2Ctrl', Tab2Ctrl)

    Tab2Ctrl.$inject = ['$scope', 'employees', 'TeamsService', 'AppConfig', 'AlertsService', 'ngTableParams']

    function Tab2Ctrl($scope, employees, TeamsService, AppConfig, AlertsService, ngTableParams) {

        $scope.isCollapsed = false
        $scope.employees = employees.data
        
        
       var data = [{name: "Moroni", age: 50},
                        {name: "Tiancum", age: 43},
                        {name: "Jacob", age: 27},
                        {name: "Nephi", age: 29},
                        {name: "Enos", age: 34},
                        {name: "Tiancum", age: 43},
                        {name: "Jacob", age: 27},
                        {name: "Nephi", age: 29},
                        {name: "Enos", age: 34},
                        {name: "Tiancum", age: 43},
                        {name: "Jacob", age: 27},
                        {name: "Nephi", age: 29},
                        {name: "Enos", age: 34},
                        {name: "Tiancum", age: 43},
                        {name: "Jacob", age: 27},
                        {name: "Nephi", age: 29},
                        {name: "Enos", age: 34}];

            $scope.tableParams = new ngTableParams({
                page: 1,            // show first page
                count: 10           // count per page
            }, {
                total: data.length, // length of data
                getData: function($defer, params) {
                    $defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                }
            });
        
        
//        angular.forEach($scope.employees, function(employee){
//            $scope.isCollapsed.push(false)
//        })
        
        $scope.AppConfig = AppConfig
        $scope.employeesDetailedInfoTitle = AppConfig.employeesDetailedInfoTitle
        $scope.employeesDetailedInfoText = AppConfig.employeesDetailedInfoText

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
            
            var response = TeamsService.addEmployeeToActiveTeam(employee, false)
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

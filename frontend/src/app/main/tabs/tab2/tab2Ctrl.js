(function(angular) {
    'use strict'

    angular
        .module('my-app.tabs.tab2')
        .controller('Tab2Ctrl', Tab2Ctrl)

    Tab2Ctrl.$inject = ['$scope', '$filter', 'employees', 'TeamsService', 'AppConfig', 'AlertsService', 'ngTableParams']

    function Tab2Ctrl($scope, $filter, employees, TeamsService, AppConfig, AlertsService, ngTableParams) {

        $scope.AppConfig = AppConfig
        $scope.employees = employees.data
        $scope.employeesDetailedInfoTitle = AppConfig.employeesDetailedInfoTitle
        $scope.employeesDetailedInfoText = AppConfig.employeesDetailedInfoText
        
        $scope.isCollapsed = []
        angular.forEach($scope.employees, function(employee){
            $scope.isCollapsed[employee.id] = true
        })

        $scope.tableParams = new ngTableParams({
            page: 1,           
            count: 10,           
            sorting: {
                name: 'asc'     
            },
            filter: {
                name: ''
            },
        }, {
            total: $scope.employees.length,
            getData: function($defer, params) {
                // use build-in angular filter
                var filteredData = params.filter() ?
                    $filter('filter')($scope.employees, params.filter()) :
                    $scope.employees
                var orderedData = params.sorting() ?
                    $filter('orderBy')(filteredData, params.orderBy()) :
                    $scope.employees
                params.total(orderedData.length)
                $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()))
            }
        })
            
        
//        angular.forEach($scope.employees, function(employee){
//            $scope.isCollapsed.push(false)
//        })
        


//        $scope.filterOptions = {
//            filterText: ''
//        }
//
//        $scope.gridOptions = {
//            data: 'employees',
//            rowTemplate: 'app/main/tabs/tab2/tab2.row.tpl.html',
//            columnDefs: [
//                {
//                    field: 'name',
//                    displayName: 'Full Name',
//                    cellTemplate: 'app/main/tabs/tab2/tab2.cell.tpl.html'
//                },
//                {
//                    field: 'age',
//                    displayName: 'Age'
//                },
//                {
//                    field: 'grade',
//                    displayName: 'Grade'
//                },
//                {
//                    field: 'job',
//                    displayName: 'Job'
//                }
//            ],
//            filterOptions: $scope.filterOptions,
//            multiSelect: false
//        }

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
        
        $scope.collapseEmployee = function(employeeID) {
            $scope.isCollapsed[employeeID] = !$scope.isCollapsed[employeeID]
        }

    }

}(window.angular))

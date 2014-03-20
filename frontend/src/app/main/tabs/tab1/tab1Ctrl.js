(function (angular) {
    'use strict'

    angular
        .module('my-app.tabs.tab1')
        .controller('Tab1Ctrl', Tab1Ctrl)

    Tab1Ctrl.$inject = ['$scope', '$http', 'EmployeesFactory', 'TeamsService', 'AlertsService', 'AppConfig'] //'employees',
    
    function Tab1Ctrl($scope, $http, EmployeesFactory, TeamsService, AlertsService, AppConfig) { //employees, 
        
//        $scope.employees = employees.data
//        $scope.teams = TeamsService.teams
        
        
        
//        $scope.employees = EmployeesFactory.getEmployees()
//        console.log($scope.employees)
        
           
        
        
        
        $scope.tags = ['just','some','cool','tags']
        
        $scope.loadTags = function(query) {
//            return $http.get('/tags?query=' + query)
//            return $http.get('common/services/employees/employees.json')
        }
        
        $scope.loadTags1 = function(a){
            console.log(a)
        }
        $scope.loadTags2 = function(a){
            console.log(a)
        }
        
        
        
        
        
        
        
        
//        $scope.addEmployeeToTeam = function(employee) {
//            
//            // TODO: use promise instead
//            var response = TeamsService.addEmployeeToActiveTeam(employee, false)
//            if(response.isError){
//                 switch(response.errorCode) {
//                    case 1:
//                        AlertsService.add(AppConfig.alerts.types.errorType, AppConfig.alerts.messages.employeeAddError)
//                        break
//                    case 2:
//                        AlertsService.add(AppConfig.alerts.types.errorType, AppConfig.alerts.messages.employeeDuplicateError)
//                        break
//                 }
//            } else {
//                AlertsService.add(AppConfig.alerts.types.infoType, AppConfig.alerts.messages.employeeAdded)
//            }
//        }
//        
//        $scope.deleteEmployeeFromTeam = function(){
//            
//        }
        
    }

}(window.angular))

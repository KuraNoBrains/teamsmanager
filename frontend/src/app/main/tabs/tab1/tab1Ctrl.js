(function (angular) {
    'use strict'

    angular
        .module('my-app.tabs.tab1')
        .controller('Tab1Ctrl', Tab1Ctrl)

    Tab1Ctrl.$inject = ['$scope', 'TeamsService', 'AlertsService', 'AppConfig'] //'employees',
    
    function Tab1Ctrl($scope, TeamsService, AlertsService, AppConfig) { //employees, 
        
//        $scope.employees = employees.data
//        $scope.teams = TeamsService.teams
        
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

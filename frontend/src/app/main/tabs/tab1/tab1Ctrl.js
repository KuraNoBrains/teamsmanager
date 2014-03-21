(function (angular) {
    'use strict'

    angular
        .module('my-app.tabs.tab1')
        .controller('Tab1Ctrl', Tab1Ctrl)

    Tab1Ctrl.$inject = ['$scope', 'employees', 'TeamsService', 'AlertsService', 'AppConfig']
    
//    function myOnSelectFunction(){
//        console.log('111')
//    }
    
    
    function Tab1Ctrl($scope, employees, TeamsService, AlertsService, AppConfig) {

        $scope.employees = employees.data
        $scope.teams = TeamsService.teams
        $scope.activeTeam = TeamsService.activeTeam
        $scope.employeesInActiveTeam = TeamsService.employeesInActiveTeam
        
//        $scope.$on("employeesInActiveTeam_update", function(){
//            $scope.employeesInActiveTeam = TeamsService.employeesInActiveTeam
//        })
        
        $scope.typeaheadOpts = {
//            loading: true,
            popoverTitle: AppConfig.employeesDetailedInfoTitle,
            popoverText: AppConfig.employeesDetailedInfoText
//            onSelect: myOnSelectFunction
        }
        
//        $scope.myOnSelectFunction = function() {
//            console.log('33333')
//        }
//        
//        function myOnSelectFunction(){
//            console.log('22222')
//        }
        
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

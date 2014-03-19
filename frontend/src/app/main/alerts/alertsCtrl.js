(function (angular) {
    'use strict'

    angular
        .module('my-app.alerts')
        .controller('AlertsCtrl', AlertsCtrl)

    AlertsCtrl.$inject = ['$scope', 'AlertsService']
    
    function AlertsCtrl($scope, AlertsService) {

        $scope.alerts = AlertsService.alerts
        
        $scope.closeAlert = function() {
            AlertsService.closeAlert()
        }
    }

}(window.angular))

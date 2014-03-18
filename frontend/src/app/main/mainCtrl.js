(function (angular) {
    'use strict'

    angular
        .module('my-app.main')
        .controller('MainCtrl', MainCtrl)

    MainCtrl.$inject = ['$scope', '$rootScope', '$state']
    
    function MainCtrl( $scope, $rootScope, $state) { //$scope, $rootScope, $state, localStorageService, alertService, AppConfig
      
        $scope.setState = function(stateID) {
            $state.go(stateID)
        }
        
        console.log($rootScope.app.AppConfig)

//        $rootScope.tooltips = AppConfig.tooltips
//        $rootScope.closeAlert = alertService.closeAlert
        
    }

}(window.angular))

(function (angular) {
    'use strict'

    angular
        .module('my-app.main')
        .controller('TabsCtrl', TabsCtrl)

    TabsCtrl.$inject = ['$scope','$state']
    
    function TabsCtrl( $scope, $state) {
      
        $scope.setState = function(stateID) {
            $state.go(stateID)
        }
        
    }

}(window.angular))

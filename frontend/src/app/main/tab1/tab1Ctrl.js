(function (angular) {
    'use strict'

    angular
        .module('my-app.tab1')
        .controller('Tab1Ctrl', Tab1Ctrl)

    Tab1Ctrl.$inject = ['$rootScope', '$scope', 'simpleObj']
    
    function Tab1Ctrl( $rootScope, $scope, simpleObj) {
        
        console.log("Tab1Ctrl")
        console.log(simpleObj)
        
    }

}(window.angular))

(function (angular) {
    'use strict'

    angular
        .module('my-app.tab1')
        .controller('Tab1Ctrl', Tab1Ctrl)

    Tab1Ctrl.$inject = ['$rootScope', '$scope']
    
    function Tab1Ctrl( $rootScope, $scope) {
        
        console.log("Tab1Ctrl")
        
    }

}(window.angular))

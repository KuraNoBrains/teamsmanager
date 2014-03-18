(function (angular) {
    'use strict'

    angular
        .module('my-app.common.teams')
        .service('TeamsService',

            function(localStorageService) {
                
                var teamService = this
                
                teamService.getTest = function(){
                    return localStorageService.get("test")
                }
                
                teamService.setTest = function(value){
                    localStorageService.add("test", JSON.stringify(value))
//                    localStorageService.set("test", value)
                }
                
                return teamService
            })

}(window.angular))          
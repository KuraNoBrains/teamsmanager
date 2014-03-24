(function(angular) {
    'use strict'

    angular
//        .module('my-app.tabs.tab1', ['decipher.tags', 'ui.bootstrap.typeahead'])
        .module('my-app.tabs.tab1', ['decipher.tags'])
        .config(Config)

    Config.$inject = ['decipherTagsOptions']

    function Config(decipherTagsOptions) {
        
//        decipherTagsOptions.delimiter = ':'
//        decipherTagsOptions.classes = {
//            myGroup: 'myClass',
//            myOtherGroup: 'myOtherClass'
//        }
    
    }

}(window.angular))
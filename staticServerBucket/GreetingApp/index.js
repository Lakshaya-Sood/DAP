var FETCH_CONFIG_URL = 'http://localhost:7777/GreetingApp/config.js';
        script(FETCH_CONFIG_URL)
        .then(function(){
            console.log('config loaded')
            script(window.appConfig.libraryLink)
            .then(function(){
                console.log('lib loaded')
            })
        })
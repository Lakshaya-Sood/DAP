var FETCH_CONFIG_URL = 'http://localhost:7777/e0af8a3e-ca7d-4557-adb8-cb9d58901bb5/config.js';
        function script(url) {
            return new Promise(function( resolve, reject ){
                var s = document.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src = url;
                s.onload = function(){
                    resolve();
                };
                var x = document.getElementsByTagName('script')[0];
                x.parentNode.insertBefore(s, x);
            });
        };
        script(FETCH_CONFIG_URL)
        .then(function(){
            console.log('config loaded')
            script(window.appConfig.libraryLink)
            .then(function(){
                console.log('lib loaded')
            })
        })
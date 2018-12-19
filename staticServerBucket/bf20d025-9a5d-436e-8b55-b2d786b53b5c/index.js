var FETCH_CONFIG_URL = 'http://localhost:7777/bf20d025-9a5d-436e-8b55-b2d786b53b5c/config.js';
        function script(url) {
            return new Promise(function( resolve, reject ){
                var s = document.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src = url;
                s.onload = function(){
                    resolve();
                };
                s.onerror = function(err){
                    reject(err);
                }
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
            }).catch((err)=>{
                console.log("lib not loaded: ",err)
            })
        })
        .catch((err)=>{
            console.log("config not loaded: ",err)
        })
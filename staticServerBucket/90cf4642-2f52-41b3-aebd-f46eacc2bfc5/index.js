var FETCH_CONFIG_URL = 'http://localhost:7777/90cf4642-2f52-41b3-aebd-f46eacc2bfc5/config.js';
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
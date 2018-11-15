const APP_KEY_TO_FETCH_CONFIG = 'GreetingApp';

    let FETCH_CONFIG_URL = 'http://localhost:3000/[APP_ID]/config';
    FETCH_CONFIG_URL = FETCH_CONFIG_URL.replace([APP_ID], APP_KEY_TO_FETCH_CONFIG);
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response;
            try {
                response = JSON.parse(this.responseText)
            }
            catch(err) {
                console.log('error: ', err);
                throw err;
            }
            window.myAppsConfig = response;
       }
    };
    xhttp.open("GET", FETCH_CONFIG_URL, true);
    xhttp.send();
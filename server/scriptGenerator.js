const serverConst = require('./serverConst');

const funcGenForApp = {
    generateIndexScript: ( appId ) => {
        return `var FETCH_CONFIG_URL = '${serverConst.STATIC_FILE_SERVER_URL}/${appId}/config.js';
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
        })`
    },
    generateConfigScript: ( appId, toursData ) => {
        return `
        window.appConfig = {
            libraryLink : "${serverConst.STATIC_FILE_SERVER_URL}/library.js",
            tours : ${JSON.stringify(
                toursData.map(ele => {
                    return {
                        tour_id: ele.tour_id,
                        tour_name: ele.tour_name
                    }
                })
            )},
            rootFolderLink: "${serverConst.STATIC_FILE_SERVER_URL}/${appId}/"
        }
        `
    },
    generateDataScriptAndPath: ( appDetails, scriptsStringObj, pathjson ) => {
        appDetails.toursData.forEach(function(ele){
            scriptsStringObj[ele.tour_id] = `window["${ele.tour_id}"] = ${JSON.stringify(ele.steps)}`
            pathjson[ele.tour_id] = `${serverConst.parentPath + appDetails.app_id}/tour.${ele.tour_id}.js`
        })
    }
}


module.exports = funcGenForApp
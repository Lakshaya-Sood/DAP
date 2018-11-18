const serverConst = require('./serverConst');

//for now these app specfic tourlist and their step defination is being fetched from a constant file
// in future it is expected to be feched from app's DB :)
//-----future change-------
const appData = require('./appSpecificData');
//------------


const funcGenForApp = {
    generateIndexScript: ( appId ) => {
        return `var FETCH_CONFIG_URL = 'http://localhost:7777/GreetingApp/config.js';
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
    generateConfigScript: ( appId ) => {
        return `
        window.appConfig = {
            libraryLink : "${serverConst.STATIC_FILE_SERVER_URL}/library.js",
            tours : ${JSON.stringify(appData[appId].tours)}
        }
        `
    },
    generateLibraryScript: ( appId ) => {
        return ``
    },
    generateTourMangerScript: ( appId ) => {
        return ``
    },
    generateDataScript: ( appId ) => {
        return `
        const hopscotchData = ${JSON.stringify(appData[appId].hopscotchData)}
        module.export = hopscotchData
        `
    } 

}


module.exports = funcGenForApp
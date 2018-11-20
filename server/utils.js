const funcGenForApp = require('./scriptGenerator'),
    serverConst = require('./serverConst');

const fs = require('fs');

const utils = {
    writeScriptToFile: ( path, scriptString ) => {
        return new Promise((resolve, reject) => {
            fs.writeFile(path, scriptString, function( err ) {
                err ? reject(err) : resolve(null, path);
            }); 
        })
    },
    generateScriptsStrings: ( appId ) => {
        return {
            "indexjsString": funcGenForApp.generateIndexScript( appId ),
            "configjsString": funcGenForApp.generateConfigScript( appId )
        }
    },
    getPathForSaveFile: ( appId ) => {
        let folderpath = serverConst.parentPath + appId;
        return {
            "indexjsString": folderpath + serverConst.indexjsPath,
            "configjsString": folderpath + serverConst.configjsPath
        }
    },
    writeScriptsStringToFiles: ( scriptsStringObj, appId ) => {
        return new Promise((resolve, reject) => {
            let promiseArray = [],
                pathjson = utils.getPathForSaveFile( appId )
            
            //to add tour step defination file content and file path
            funcGenForApp.generateDataScriptAndPath( appId, scriptsStringObj, pathjson )

            Object.keys(scriptsStringObj).forEach(( key ) => {
                let eachPromise = utils.writeScriptToFile( pathjson[key], scriptsStringObj[key])
                promiseArray.push(eachPromise)
            })
            
            Promise.all( promiseArray )
            .then(()=>{
                resolve()
            })
            .catch(()=>{
                reject()
            })
        })
    }
}

module.exports = utils;
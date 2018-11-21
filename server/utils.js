const funcGenForApp = require('./scriptGenerator'),
    serverConst = require('./serverConst');
    dbUtils = require('./db/index.js');

const fs = require('fs'),
    mkdirp = require('mkdirp');

const utils = {
    writeScriptToFile: ( path, scriptString, folderPath ) => {
        return new Promise((resolve, reject) => {
            mkdirp(folderPath, function(err) {
                if(err){
                    reject(err)
                }
                fs.writeFile(path, scriptString, function( err ) {
                    err ? reject(err) : resolve(null, path);
                }); 
            });
        })
    },
    generateScriptsStrings: ( appDetails ) => {
        return {
            "indexjsString": funcGenForApp.generateIndexScript( appDetails.app_id ),
            "configjsString": funcGenForApp.generateConfigScript( appDetails.app_id, appDetails.toursData )
        }
    },
    getPathForSaveFile: ( appId ) => {
        let folderpath = serverConst.parentPath + appId;
        return {
            "indexjsString": folderpath + serverConst.indexjsPath,
            "configjsString": folderpath + serverConst.configjsPath
        }
    },
    writeScriptsStringToFiles: ( scriptsStringObj, appDetails ) => {
        return new Promise((resolve, reject) => {
            let promiseArray = [],
                pathjson = utils.getPathForSaveFile( appDetails.app_id ),
                folderPath = serverConst.parentPath + appDetails.app_id;
            
            //to add tour step defination file content and file path
            funcGenForApp.generateDataScriptAndPath( appDetails, scriptsStringObj, pathjson )

            Object.keys(scriptsStringObj).forEach(( key ) => {
                let eachPromise = utils.writeScriptToFile( pathjson[key], scriptsStringObj[key], folderPath)
                promiseArray.push(eachPromise)
            })
            
            Promise.all( promiseArray )
            .then(()=>{
                resolve()
            })
            .catch( err => {
                reject( err )
            })
        })
    },
    fetchDataFromDB: ( appId ) => {
        return new Promise((resolve,reject) => {
            dbUtils.fetchApplicationRecordFromDB(appId)
            .then(data => {
                let appRecord = data[0],
                    promiseArr = []
        
                appRecord.tours.forEach( tourId => {
                    let eachPromise = dbUtils.fetchTourRecordFromDB( tourId );
                    promiseArr.push( eachPromise )
                });
        
                Promise.all( promiseArr )
                .then( data => {
                    toursData = data.map( ele => ele[0])
                    appRecord.toursData = toursData
                    resolve(appRecord)
                })
                .catch( err => reject(err))
            })
            .catch( err => reject(err))
        })
    }
}

module.exports = utils;
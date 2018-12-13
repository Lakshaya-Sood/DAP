const funcGenForApp = require('./scriptGenerator'),
    serverConst = require('../../serverConst');

var application = require('../controllers/application');
var tour = require('../controllers/tour');

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
            "configjsString": funcGenForApp.generateConfigScript( appDetails.app_id, appDetails.toursData, appDetails.styles )
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
            application.fetchAppById(appId)
            .then(data => {
                let appRecord = data[0][0];
                tour.fetchToursByAppId(appId)
                .then( tours => {
                    resolve({...appRecord, toursData: tours[0]})
                })
                .catch( err => {
                    reject(err)
                })
            })
            .catch( err => reject(err))
        })
    }
}

module.exports = utils;
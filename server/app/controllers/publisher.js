
var utils = require('../helper/utils');
var constants = require('../../serverConst');
const publish = function(req, res) {
    utils.fetchDataFromDB(req.body.appId)
    .then( appDetails => {
        let scriptsStringObj = utils.generateScriptsStrings( appDetails );
        
        utils.writeScriptsStringToFiles( scriptsStringObj, appDetails )
        .then( pathArray => {
            
            let entryScriptPath = '';
            pathArray.every((item)=>{
                if(item.includes('index.js')){
                    entryScriptPath = item.replace('../staticServerBucket',constants.STATIC_FILE_SERVER_URL)
                    return false
                }
                return true
            })
            console.log('path: ', entryScriptPath);
            res.status(200);
            res.json({path: entryScriptPath});
        })
        .catch( err => {
            console.log(err)
            res.status(500);
            res.json(err);
        })
    })
    .catch( err => {
        console.log(err)
        res.send( err )
    })
}

module.exports = {
    publish
}

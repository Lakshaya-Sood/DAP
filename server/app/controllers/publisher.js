
var utils = require('../helper/utils');

const publish = function(req, res) {
    utils.fetchDataFromDB(req.body.appId)
    .then( appDetails => {
        let scriptsStringObj = utils.generateScriptsStrings( appDetails );
        
        utils.writeScriptsStringToFiles( scriptsStringObj, appDetails )
        .then( path => {
            res.send( path );
        })
        .catch( err => {
            console.log(err)
            res.send( err );
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

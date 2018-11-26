const express = require('express')

var config = require('./config/config');
const app = express()

//Initialize Express
require('./config/express')(app);

//Initialize Routes
require('./config/routes').init(app);

//Start the app by listening on <port>
var port = process.env.PORT || config.port;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

exports = module.exports = app;

//// below handle
const utils = require('./utils');

app.post('/publishScripts', ( req, res ) => {
    utils.fetchDataFromDB( req.body.appId )
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
})

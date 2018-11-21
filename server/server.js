const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

const utils = require('./utils');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

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

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
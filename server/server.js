const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

const utils = require('./utils');
const dbUtils = require('./db/index.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.post('/publishScripts', ( req, res ) => {
    dbUtils.fetchApplicationRecordFromDB(req.body.appName)
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err)
    })
    // let scriptsStringObj = utils.generateScriptsStrings( req.body.appId );

    // utils.writeScriptsStringToFiles( scriptsStringObj, req.body.appId )
    // .then((path)=>{
    //     res.send( path );
    // })
    // .catch((path)=>{
    //     res.send( path );
    // })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
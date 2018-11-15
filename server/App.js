const express = require('express')
const app = express()
const port = 3000
const constants = require('./constants')

app.get('/toursList', (req, res) => {
    console.log("request coming")
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.json(constants.tourListdata)
    //res.send(tourList)
})

app.get('/stepsData/:key', (req, res) => {
    console.log("request coming new")
    
    let stepDefURI = req.params.key

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.json(constants.hopscotchData[stepDefURI])
})

app.get('/:appId/config', (req, res) => {
    console.log("request coming new new")
    
    let appId = req.params.appId
    
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    res.json(constants.applicationSpecificConfiguration[appId])
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
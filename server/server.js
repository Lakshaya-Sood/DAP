const express = require('express')
const app = express()
const port = 3000
const constants = require('./constants')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

function handleCORS(res){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
}

app.get('/toursList', (req, res) => {
    console.log("request coming")
    handleCORS(res)
    res.json(constants.tourListdata)
})

app.get('/stepsData/:key', (req, res) => {
    console.log("request coming new")
    
    let stepDefURI = req.params.key
    handleCORS(res)
    res.json(constants.hopscotchData[stepDefURI])
})

app.get('/:appId/config', (req, res) => {
    console.log("request coming new new")
    let appId = req.params.appId
    handleCORS(res)
    res.json(constants.applicationSpecificConfiguration[appId])
})

app.post('/generateScript',function(req,res){
    let scriptString = generateScriptForApp(req.body.appId);
    constants.writeScriptToFile(`./scripts/tours.${req.body.appId}.js`,scriptString, (err, path)=>{
        if(err) {
            console.log('error: ', err);
        }
        handleCORS(res)
        res.send(path);
    })
})

function generateScriptForApp(appId) {
    return `var FETCH_CONFIG_URL = 'http://localhost:3000/${appId}/config';
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response;
            try {
                response = JSON.parse(this.responseText)
            }
            catch(err) {
                console.log('error: ', err);
                throw err;
            }
            window.myAppsConfig = response;
       }
    };
    xhttp.open("GET", FETCH_CONFIG_URL, true);
    xhttp.send();`
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
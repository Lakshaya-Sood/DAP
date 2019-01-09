var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var config = require('./config/config');
const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

//Initialize Routes
require('./config/routes').init(app);

app.use(express.static(path.join(__dirname, "../staticServerBucket")));

//Start the app by listening on <port>
var port = process.env.PORT || config.port;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

exports = module.exports = app;

var db = require('../../config/sequelize');

var application = require('../app/controllers/application');
var tour = require('../app/controllers/tour');

const publish = function(req, res) {
    application.fetchAppById( req.body.appId )
    .then(result => {
        return res.json(result)
    })
    .catch(err => {
        return res.render('error', {
            error: err, 
            status: 500
        });
    })
}

module.export = {
    publish
}

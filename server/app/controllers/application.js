var db = require('../../config/sequelize');

const fetchAppById = function(appId){
    return new Promise((resolve,reject) => {
        db.sequelize.query('SELECT * FROM application WHERE app_id = ?',
        { raw: true, replacements: [appId]})
        .then(record => {
            resolve(record)
        })
        .catch(err => {
            reject(err)
        })
    })
}

const fetchRecord = function(req, res) {
    fetchAppById( req.query.appId )
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

module.exports = {
    fetchAppById,
    fetchRecord
}

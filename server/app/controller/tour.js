var db = require('../../config/sequelize');

const fetchToursByAppid = function(appId){
    return new Promise((resolve,reject) => {
        db.tour.findAll({where: {app_id: appId}})
        .then(records => {
            resolve(records)
        })
        .catch(err => {
            reject(err)
        })
    })
}

const fetchTours = function(req, res) {
    fetchToursByAppid( req.query.appId )
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
    fetchToursByAppid,
    fetchTours
}

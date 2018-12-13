var db = require('../../config/sequelize');

const fetchTourByTourId = function(tourId){
    return new Promise((resolve,reject) => {
        db.sequelize.query('SELECT * FROM tour WHERE tour_id = ?',
        { raw: true, replacements: [tourId]})
        .then(records => {
            resolve(records)
        })
        .catch(err => {
            reject(err)
        })
    })
}
const fetchTour = function(req, res) {
    fetchTourByTourId( req.query.tourId )
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
///////////////////////////////////////
const fetchToursByAppId = function(appId){
    return new Promise((resolve,reject) => {
        db.sequelize.query('SELECT * FROM tour WHERE app_id = ?',
        { raw: true, replacements: [appId]})
        .then(records => {
            resolve(records)
        })
        .catch(err => {
            reject(err)
        })
    })
}

const fetchTours = function(req, res) {
    fetchToursByAppId( req.query.appId )
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
    fetchTourByTourId,
    fetchTour,
    fetchToursByAppId,
    fetchTours
}

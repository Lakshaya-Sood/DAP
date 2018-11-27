var db = require('../../config/sequelize');

const fetchTourById = function(tourId){
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
    fetchTourById( req.query.tourId )
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
    fetchTourById,
    fetchTour
}

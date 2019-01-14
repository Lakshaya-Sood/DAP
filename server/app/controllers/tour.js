var db = require("../../config/sequelize");

const fetchTourByTourId = function(tourId) {
  // repo
  return new Promise((resolve, reject) => {
    db.sequelize
      .query("SELECT * FROM tour WHERE tour_id = ?", {
        raw: true,
        replacements: [tourId]
      })
      .then(records => {
        resolve(records);
      })
      .catch(err => {
        reject(err);
      });
  });
};
const fetchTour = function(req, res) {
  // handler
  fetchTourByTourId(req.query.tourId)
    .then(result => {
      return res.json(result);
    })
    .catch(err => {
      return res.render("error", {
        error: err,
        status: 500
      });
    });
};
///////////////////////////////////////
const fetchToursByAppId = function(appId) {
  // repo
  return new Promise((resolve, reject) => {
    db.sequelize
      .query("SELECT * FROM tour WHERE app_id = ?", {
        raw: true,
        replacements: [appId]
      })
      .then(records => {
        resolve(records);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const fetchTours = function(req, res) {
  // handler
  fetchToursByAppId(req.query.appId)
    .then(result => {
      return res.json(result);
    })
    .catch(err => {
      return res.render("error", {
        error: err,
        status: 500
      });
    });
};
////////////////////////////
const insertRecordInDb = function(tour_name, app_id, steps) {
  // repo
  return new Promise((resolve, reject) => {
    db.sequelize
      .query(
        `INSERT INTO public.tour
        (tour_name, app_id, created_on, steps)
        VALUES(?, ?, current_timestamp, ?
        );`,
        { raw: true, replacements: [tour_name, app_id, JSON.stringify(steps)] }
      )
      .then(records => {
        resolve(records);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const insertRecord = function(req, res) {
  // handler
  let { tour_name, app_id, steps } = req.body;
  insertRecordInDb(tour_name, app_id, steps)
    .then(result => {
      console.log(result);
      res.status(200);
      res.json({
        status: "done"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500);
      res.json({
        status: "fail"
      });
    });
};

module.exports = {
  fetchTourByTourId,
  fetchTour,
  fetchToursByAppId,
  fetchTours,
  insertRecordInDb,
  insertRecord
};

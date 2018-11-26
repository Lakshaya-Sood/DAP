var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var _         = require('lodash');
var config    = require('./config');
var db        = {};

const USER_DB = process.env.USER_DB;
const PASSWORD_DB = process.env.PASSWORD_DB;
const DB = process.env.DB;
const HOST_DB = process.env.HOST_DB;
const PORT_DB = process.env.PORT_DB;

// create your instance of sequelize
const sequelize = new Sequelize(DB, USER_DB, PASSWORD_DB, {
  dialect: 'postgres',
  host: HOST_DB,
  port: PORT_DB
})

// loop through all files in models directory ignoring hidden files and this file
fs.readdirSync(config.modelsDir)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js')
  })
  // import model files and save model names
  .forEach(function(file) {
    console.log('Loading model file ' + file);
    var model = sequelize.import(path.join(config.modelsDir, file));
    db[model.name] = model;
  })

// invoke associations on each of the models
Object.keys(db).forEach(function(modelName) {
    if (db[modelName].options.hasOwnProperty('associate')) {
      db[modelName].options.associate(db)
    }
  });

// assign the sequelize variables to the db object and returning the db. 
module.exports = _.extend({
    sequelize: sequelize,
    Sequelize: Sequelize
  }, db);
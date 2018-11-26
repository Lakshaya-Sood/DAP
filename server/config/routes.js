
var application = require('../app/controllers/application');
var tour = require('../app/controllers/tour');
var publisher = require('../app/controllers/publisher');

exports.init = function( app ) {

    console.log('Initializing Routes');

    // application Routes
    app.post('/app', application.insertRecord);
    app.put('/app', application.updateRecord);

    // tour Routes
    app.post('/tour', tour.insertRecord);
    app.put('/tour', tour.updateRecord);

    // publish script Routes
    app.post('/publish', publisher.publish);
};

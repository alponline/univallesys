// server.js

// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var morgan 		     = require('morgan');
var _ 			       = require("underscore");

var path           = require('path');


// configuration ===========================================

// config files
//var db = require('./config/db');

// set our port
var port = process.env.PORT || 3000;

// connect to our mongoDB database
//mongoose.connect(db.url);

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());


 app.use(morgan('combined', {
  skip: function (req, res) { return res.statusCode < 400; }
}));

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use('/resources', express.static(__dirname + '/resources'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

// routes ==================================================
require('./routes/routes_login')(app); // configure our routes
require('./routes/routes_grupo')(app); // configure our routes
require('./routes/routes_produto')(app); // configure our routes
require('http');

app.listen(port, function () {
	console.log('Listening at ' + port);
});

// expose app
exports = module.exports = app;

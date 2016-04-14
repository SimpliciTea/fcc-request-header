'use strict';

var path = process.cwd();
var HeaderHandler = require(path + '/app/controllers/headerHandler.server.js');

module.exports = function (app) {
	var headerHandler = new HeaderHandler();

	app.route('/')
		.get(function(req, res) {
			res.sendFile(path + '/public/index.html');
		});

	app.route('/api/whoami')
		.get(headerHandler.requestHeader);
};
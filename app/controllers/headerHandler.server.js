'use strict';


function headerHandler () {

	this.requestHeader = function(req, res) {
		var regExp = /\(([^)]+)\)/;

		var software = regExp.exec(req.headers['user-agent'])[1];
		var ip = req.connection.remoteAddress;
		var language = req.headers['accept-language'].split(',')[0];

		var whoami = {
			'ipaddress': ip,
			'language': language,
			'software': software
		}

		res.end(JSON.stringify(whoami));
	};
}


module.exports = headerHandler;
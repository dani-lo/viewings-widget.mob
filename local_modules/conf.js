var APPCONF = {
	"dbconn": "mongodb://dani:danidev@ds045684.mongolab.com:45684/devinteractive",
	"secret": "*********notforthisproject********",
	"auth": {
		"github": {
			"clientID": "7e8a72edfb8e3627963a",
			"clientSecret": "*********notforthisproject********",
			"callbackURL": "http://localhost:3000/auth/callback"
		}
	},
	"mquery": {
		"userByEmailPass": function (email, password) {
			"use strict";
			return {$and:[{"email": email}, {"password": password}]};
		}
	}
};

module.exports = APPCONF;
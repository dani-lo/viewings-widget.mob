"use strict";
//
var React = require('react'),
	ReactDOM = require('react-dom');
//
var RDPage			= require('../lib/RDPage');
//
class LoginPage extends RDPage{
	//
	constructor (options) {
		//
		super(options);
	}
	//
	mount () {
		//
		//var domLoginFormTarget = document.getElementById('devint-login-form');
		//
		//ReactDOM.render(<LoginForm/>, domLoginFormTarget);
	}
	
}
//
module.exports = LoginPage;
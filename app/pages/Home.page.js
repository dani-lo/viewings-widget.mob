"use strict";
//
var React 			= require('react'),
	ReactDOM 		= require('react-dom');
//
var RDPage			= require('../lib/RDPage');
//
var HomeBtnActions 	= require('../dom/btn/BtnHomeActions.react');

class HomePage extends RDPage {
	//
	constructor (options) {
		//
		super(options);
	}
	//
	mount () {
		//
		ReactDOM.render(<HomeBtnActions/>, this.outer);
		
		this.postRender();
	}
}
//
module.exports = HomePage;
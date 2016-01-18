"use strict";
//
var React 		= require('react'),
	ReactDOM 	= require('react-dom');
//
var RDCollect 	= require('../lib/RDCollect'),
	RDConf 		= require('../lib/RDConfig'),
	RDPage		= require('../lib/RDPage');
//
var XpList 		= require('../dom/list/ListXp.react');
/**
*
*
*
*/
class XpPage extends RDPage {

	constructor (options) {
		//
		super(options);
		//
		this.collection =  new RDCollect({
			url: RDConf.api.xp.url
		});
	}
	//
	mount () {
		//
		this.collection.retrieve().then(() => {
			//
			ReactDOM.render(<XpList xp={this.collection.flatten()} />, this.outer);
		});
		
		this.postRender();
	}
}
//
module.exports = XpPage;
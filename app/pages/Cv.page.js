"use strict";
//
var React 		= require('react'),
	ReactDOM 	= require('react-dom');
//
var RDCollect 	= require('../lib/RDCollect'),
	RDConf 		= require('../lib/RDConfig'),
	RDPage		= require('../lib/RDPage');
//
var CvList 		= require('../dom/list/ListCv.react');
/**
*
*
*
*/
class CvPage extends RDPage{
	//
	constructor (options) {
		//
		super(options);

		this.collection =  new RDCollect({
			url: RDConf.api.jobs.url
		});
	}

	mount () {
		//
		this.collection.retrieve().then(() => {
			//
			ReactDOM.render(<CvList cv={this.collection.flatten()} />, this.outer);
		});

		this.postRender();
	}
}
//
module.exports = CvPage;
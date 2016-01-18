"use strict";

var React = require('react'),
	ReactDOM = require('react-dom');
/////////////////
class RDPage {
	//
	constructor (options) {
		//
		this.outer = options.outer || null;
		//
		this.title = options.title || null;

		return this;
	}
	//
	postRender () {
		//
		setTimeout(function () {
			//
			this.outer.className = "page-outer is-loaded";
		}.bind(this), 750);
	}
	//
	unmount () {
		//
		this.outer.className = "page-outer is-unloaded";
		//
		var deferred = new Promise((resolve, reject) => {

			setTimeout(()=> {
				//
				ReactDOM.unmountComponentAtNode(this.outer);

				resolve({"unmount": "ok"});
			}, 750);
		});
		//
		return deferred;
	}
}

module.exports = RDPage;
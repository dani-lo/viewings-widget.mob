/////////////////
"use strict";

var Backbone = require("backbone");

class RDCollect {
	//
	constructor (options) {
		//
		var collection = Backbone.Collection.extend({
			url: options.url
		});

		this.dataset = new collection();

		return this;
	}
	//
	createDocument (jDoc, addUrl) {
		//
		var docMod = new Backbone.Model(jDoc);

		if (addUrl) {
			//
			docMod.url = this.dataset.url;
		}

		return docMod;
	}
	//
	addDocument (doc) {
		//
		var useDoc;
		
		if (doc instanceof Backbone.Model) {
			useDoc = doc;
		} else {
			useDoc = this.createDocument(doc);
		}
		//
		return this.dataset.add(useDoc);
	}
	//
	retrieve () {
		//
		var deferred = new Promise((resolve, reject) => {
		  
			this.dataset.fetch({
				success: function (d) {
					return resolve(d);
				},
				error : function () {
					return reject("The collection could note be fetched");
				}
			});
		});
		//
		return deferred;
	}
	//
	persist (mod) {
		//
		var model,
			deferred;

		if (mod instanceof Backbone.Model) {
			model = mod;
		} else {
			model = this.dataset.get(mod);
		}

		deferred = new Promise((resolve, reject) => {
			model.save(null, {
				success: function (d) {
					resolve(d);
				},
				error : function () {
					reject("The model could note be saved");
				}
			});
		});

		return deferred;
	}
	//
	flatten () {
		//
		return this.dataset.toJSON();
	}
 }

module.exports = RDCollect;
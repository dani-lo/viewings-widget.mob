/////////////////
"use strict";

var Router = require("../util/router");

var instance = null;

class RDEvent {
	//
	constructor () {
		//
		if (instance !== null) {

	        throw new Error("Cannot instantiate more than one RDEvent");
	    }
	    
	    this.initialize();
	}

	initialize () {
		//
		this.listeners = {};
	}
	
	registerListener (ev, action) {
		//
		this.listeners[ev] = action;
	}
	
	invokeListener (ev, options) {
		//
		if (this.listeners[ev]) {
			//
			this.listeners[ev].call(null, options);
		}
	}
}

function getInstance () {
	//
    if (instance === null) {
        //
        instance = new RDEvent();
    }
    //
    return instance;
}

module.exports = getInstance();
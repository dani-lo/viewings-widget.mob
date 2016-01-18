"use strict";

var mongo = require("mongodb"),
    monk = require("monk"),
    appConf = require("./conf"),
    db = monk(appConf.dbconn);

class User {
	//
 	constructor (options) {
    	this.email = options.email;
    	this.password = options.password;
  	}
    //
  	getUser (onSuccess, onFail) {
  		//
  		var collection = db.get("users");

  		collection.find(appConf.mquery.userByEmailPass(this.email, this.password), {}, (e, docs) => {
      		//
      		if (docs.length === 1) {
              //
        			return onSuccess.call(null, this.toObject());
      		} else {
              //
      		    return onFail.call(null);
      		}
      });
  	}
    //
    deleteUser (onSuccess, onFail) {
      //
    }
    //
    updateUser (onSuccess, onFail) {
      //
    }
    //
    adUser (onSuccess, onFail) {
      //
    }
    //
  	toObject () {
  		return {
  			email: this.email,
  			password: this.password
  		}
  	}
}

module.exports = User;
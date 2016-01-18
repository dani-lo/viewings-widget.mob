/*
var App = require('./../app/pages/Login.page'),
	React = require('react/addons'),
	TestUtils = React.addons.TestUtils;

describe("App", function() {

  it("should render text: Hello world!", function() {
  	//
    var app = TestUtils.renderIntoDocument(React.createElement(App));
    //
    expect(React.findDOMNode(app).textContent).toEqual('Hello world!');
  });

});
*/
var RDCollect = require("../app/lib/RDCollect"),
	Backbone = require("backbone");

describe("lib: RDCollect", function() {

	var rdCollection, model;

	beforeEach(function () {
		rdCollection = new RDCollect({
	    	url: "/foo/bar"
	    });
	});

  	it("should instantiate a new Backbone collection", function() {
  		//
    	expect(rdCollection.dataset instanceof Backbone.Collection).toBeTruthy();
  	});
  	
  	it("should create a Backbone model and add a url to it", function() {
  		//
  		model = rdCollection.createDocument({"foo":"bar"}, true);//
  		//
    	expect(model instanceof Backbone.Model).toBeTruthy();
    	expect(model.get("foo")).toEqual("bar");
    	expect(model.url).toEqual("/foo/bar");
  	});

  	it("should add a new model to local data", function() {
  		//
  		var newCollectionModel = rdCollection.addDocument({bar: "baz"});
  		//
    	expect(newCollectionModel instanceof Backbone.Model).toBeTruthy();
  	});

  	it("should persist", function() {
  		//
  		var newCollectionModel = rdCollection.addDocument({bar: "baz"});
  		//
    	expect(newCollectionModel instanceof Backbone.Model).toBeTruthy();
  	});

});
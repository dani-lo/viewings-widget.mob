/** @jsx React.DOM */
var React 		= require('react'),
	ReactDOM 	= require('react-dom');
//
var RDHub	 	= require('../lib/RDHub');

var BtnHeaderActions = require('../dom/btn/BtnHeaderActions.react');
//
var instance = null,
	DevintHeader;
//
function AppHeader() {
    //
    if (instance !== null) {

        throw new Error("Cannot instantiate more than one Fs");
    }
    
    this.initialize();
}
//
AppHeader.prototype.initialize = function () {
	//
	var headerTarget = document.getElementById("hold-target-header"),
		Header = React.createClass({
			//
			getInitialState: function() {
				//
				return {
					mviz: "hide"
				}
			},

			componentDidMount: function() {
				// ...
				DevintHeader = this;

    			window.addEventListener('scroll', this.handleScroll);


			},

			componentWillUnmount: function() {
			    //
			    DevintHeader = null;

			    window.removeEventListener('scroll', this.handleScroll);
			},

			handleScroll: function () {
				//
			},

			render: function() {
				//
				return (
					<header className={"inner-heder viz-" + this.state.mviz}>
						<BtnHeaderActions />
					</header>
				);
			}
		});

	ReactDOM.render(<Header />, headerTarget);
}
//
AppHeader.prototype.show = function (thenHide) {
	//
	DevintHeader.setState({mviz: "show"});

	if (thenHide) {
		//
		window.setTimeout(this.hide.bind(this), 3000);
	}

	return this;
}
//
AppHeader.prototype.hide = function () {
	//
	DevintHeader.setState({mviz: "hide"});

	return this;
}
//
AppHeader.getInstance = function () {
    //
    if (instance === null) {
        //
        instance = new AppHeader();
    }
    //
    return instance;
};
//
module.exports = AppHeader.getInstance();
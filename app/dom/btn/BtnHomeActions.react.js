//
var RDEvent = require("../../lib/RDEvent"),
	RDHub	= require("../../lib/RDHub");

var React = require('react');

var BtnHomeActions= React.createClass({
	//
	goToCv: function(ev) {
		//
		ev.preventDefault();

		RDHub.appRouter.navigate("/app/cv");
	},
	//
	goToExperience: function(ev) {
		//
		ev.preventDefault();

		RDHub.appRouter.navigate("/app/experience");
	},
	//
	render: function() {
		//
		return (
			<p className="home-btn">
				<a className="btn-large" href="#_" onClick={this.goToCv}>See Samples</a>
				<a className="btn-large" href="#_" onClick={this.goToExperience}>See Experience</a>
			</p>
		);
	}
});

module.exports = BtnHomeActions;
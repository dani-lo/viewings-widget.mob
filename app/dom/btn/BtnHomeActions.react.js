//
var RDEvent = require("../../lib/RDEvent"),
	RDHub	= require("../../lib/RDHub");

var React = require('react');

var BtnHomeActions= React.createClass({
	//
	goToBookings: function(ev) {
		//
		ev.preventDefault();

		RDHub.appRouter.navigate("/app/bookings");
	},
	//
	render: function() {
		//
		return (
			<p className="viewings-btn">
				<a className="btn btn-large btn-home-viewings" href="#_" onClick={this.goToBookings}>Book a Viewing</a>
			</p>
		);
	}
});

module.exports = BtnHomeActions;
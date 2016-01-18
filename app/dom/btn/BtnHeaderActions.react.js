//
var RDEvent = require("../../lib/RDEvent"),
	RDHub	= require("../../lib/RDHub"),
	RDEvent	= require("../../lib/RDEvent");

var React 		= require('react'),
	classNames 	= require('classnames');

var BtnHeaderActions= React.createClass({
	//
	getInitialState: function() {
		return {
			activeBackBtn: false
		};
	},
	//
	componentDidMount: function () {
		//
		RDEvent.registerListener("onappnavigate", function (options) {
			//
			this.setState({activeBackBtn: options.path.indexOf("home") === -1});
			
		}.bind(this));
	},
	//
	goToHome: function(ev) {
		//
		ev.preventDefault();

		RDHub.appRouter.navigate("/app/home");
	},
	//
	goToLogout: function(ev) {
		//
		ev.preventDefault();

		RDHub.appRouter.hard("/logout");
	},
	//
	render: function() {
		//
		var btnBackClassname = classNames({
				"btn": "true",
				"unactive": !this.state.activeBackBtn
			});

		return (
			<p className="header-btn">
				<a className={btnBackClassname} href="#_" onClick={this.goToHome}>Home</a>
				<a className="btn" href="#_" onClick={this.goToLogout}>Logout</a>
			</p>
		);
	}
});

module.exports = BtnHeaderActions;
/** @jsx React.DOM */
var React = require('react'),
	ReactDOM = require('react-dom');
//
var instance = null,
	DevintModal;
//
function AppModal() {
    //
    if (instance !== null) {

        throw new Error("Cannot instantiate more than one Fs");
    }
    
    this.initialize();
}
//
AppModal.prototype.initialize = function () {
	//
	var modalTarget = document.getElementById("hold-target-modal"),
		Modal = React.createClass({
			//
			getInitialState: function() {
				//
				return {
					mtype: "success",
					mtext: "Text here",
					mviz: "hide"
				}
			},

			componentDidMount: function() {
				// ...
				DevintModal = this;
			},

			render: function() {
				//
				return (
					<div className={"inner-modal modal-" + this.state.mtype + " viz-" + this.state.mviz}>
						<p>{this.state.mtext}</p>
					</div>
				);
			}
		});

	ReactDOM.render(<Modal />, modalTarget);
}
//
AppModal.prototype.show = function (thenHide) {
	//
	DevintModal.setState({mviz: "show"});

	if (thenHide) {
		//
		window.setTimeout(this.hide.bind(this), 3000);
	}

	return this;
}
//
AppModal.prototype.hide = function () {
	//
	DevintModal.setState({mviz: "hide"});

	return this;
}
//
AppModal.prototype.setText = function (mtext) {
	//
	DevintModal.setState({mtext: mtext});

	return this;
}
//
AppModal.prototype.setType = function (mtype) {
	//
	DevintModal.setState({mtype: mtype});

	return this;
}
//
AppModal.getInstance = function () {
    //
    if (instance === null) {
        //
        instance = new AppModal();
    }
    //
    return instance;
};
//
module.exports = AppModal.getInstance();
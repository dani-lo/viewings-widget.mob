(function () {
	//
	var RDHub 	= require("./lib/RDHub"),
		RDEvent	= require("./lib/RDEvent");
	//
	var HomePage 		= require("./pages/Index.page"),
		BookingsPage	= require("./pages/Bookings.page");
	//
	var AppHeader	= require('./widget/Header.widget');
	//
	function loadAppPageView (pageView) {
		//
		var currPage = RDHub.getCurrentPageView();
		//
		RDHub.setCurrentPageView(pageView);

		if (currPage !== null) {
			//
			currPage.unmount().then(function () {
				//
				pageView.mount();
			});
		} else {
			//
			pageView.mount();
		}
	}
	//
	function appHomeRouteAction () {
		//
		var pageHome = new HomePage({
			title: "Bookings Home Page"
			outer: document.getElementById("bookings-home")
		});

		loadAppPageView(pageHome);
	}
	//
	function appBookingsRouteAction () {
		//
		var pageCv = new BookingsPage({
			title: "Bookings bookings Page",
			outer: document.getElementById("devint-bookings")
		});

		loadAppPageView(pageCv);
	}
	// adding routes
	RDHub.appRouter.setOnRouteChange(function (path) {
		//
		RDEvent.invokeListener("onappnavigate", {path: path});
	});
	//
	RDHub.appRouter.add(/home/, appHomeRouteAction)
					.add(/bookings/, appBookingsRouteAction)
					.add(appHomeRouteAction) // default
					.check()
					.listen();


})();
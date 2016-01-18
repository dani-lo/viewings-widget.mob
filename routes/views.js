/*
 * GET home page.
 */
exports.index = function(req, res){
	res.render('index', {"pagedata": {"cname": "appview-index"}});
};

exports.bookings = function(req, res){
	res.render('bookings', {"pagedata": {"cname": "appview-bookings"}});
};
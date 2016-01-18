/*
 * Serve JSON to our React client
 */

/* not needd in this proj ....
exports.jobs = function (req, res) {
	var collection = req.db.get('jobs');
	collection.find({$query:{},$orderby:{"added": 1}}, {},function(e, docs){
		res.json(docs);
	});
};
*/
/* not needd in this proj ....
exports.experience = function (req, res) {
	var collection = req.db.get('experience');
	collection.find({$query:{},$orderby:{"_id": 1}}, {},function(e, docs){
		res.json(docs);
	});
};
*/
//
exports.timeslots = function (req, res) {
	//
	var collection = [
		{"daynum": 21, "daymonth": "march", "dayname": "monday", "dayslots": [0,0,0,0]},
		{"daynum": 22, "daymonth": "march", "dayname": "tuesday", "dayslots": [0,0,0,0]},
		{"daynum": 23, "daymonth": "march", "dayname": "thursday", "dayslots": [0,0,0,0]},
		{"daynum": 24, "daymonth": "march", "dayname": "friday", "dayslots": [0,0,0,0]}
	];
	//
	res.json(collection);
};
//
exports.booking = function (req, res) {
	var msg = {
		status: "success",
		message: "thanks you for your booking"
	};
	//
	res.json(msg);
};
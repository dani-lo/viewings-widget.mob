/*
 * Serve JSON to our React client
 */
exports.jobs = function (req, res) {
	var collection = req.db.get('jobs');
	collection.find({$query:{},$orderby:{"added": 1}}, {},function(e, docs){
		res.json(docs);
	});
};

exports.experience = function (req, res) {
	var collection = req.db.get('experience');
	collection.find({$query:{},$orderby:{"_id": 1}}, {},function(e, docs){
		res.json(docs);
	});
};

exports.booking = function (req, res) {
	var msg = {
		status: "success",
		message: "thanks you for your booking"
	};
	//
	res.json(msg);
}
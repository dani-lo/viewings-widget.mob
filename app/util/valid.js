module.exports = function (type, val) {
	//
	var isValid = false;

	if (type === "email") {
      //
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      isValid = re.test(val);
    } else {
      //
      isValid = val.length > 1;
    }
    //
    return isValid;
};
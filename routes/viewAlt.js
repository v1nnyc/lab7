var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.viewAlt = function(request, response){
	projects["viewAlt"] = true;
  	response.render('index', projects);	
};
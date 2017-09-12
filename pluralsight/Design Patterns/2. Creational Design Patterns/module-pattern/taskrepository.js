var repo = function(){

	// all of my stuff is safe in this module, however you can expose your methods in the return statement (line 17)
	var db = {};

	var get = function(id){
			console.log('getting task ' + id);
			return{
				name: 'new task from db'
			}
		}

	var save =  function(task){
			console.log('saving ' + task.name + ' to the DB');
		}

	return{
		// a series of methods relative to DB calls, and stuff
		get: get,
		save: save
	}

}


module.exports = repo();
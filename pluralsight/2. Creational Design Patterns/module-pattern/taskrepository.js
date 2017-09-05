var repo = function(){

	return{
		// a series of methods relative to DB calls, and stuff
		get: function(id){
			console.log('getting task ' + id);
			return{
				name: 'new task from db'
			}
		},
		save: function(task){
			console.log('saving ' + task.name + ' to the DB');
		}
	}


}


module.exports = repo();
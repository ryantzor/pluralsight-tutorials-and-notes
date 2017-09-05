/**
	Module Pattern:

	<!> it's a simple way to take a bunch
	of methods that are similar, and put them 
	into a toolbox

	<!> a lot of times you need a service for a database
	so you'll create a database module to deal with 
	all of those calls

	<!> simply, modules are just object literals

	<!> generally when you're doing a module, yoo will 
	only have one of these. In contrast, on the
	constructor pattern we create mutilple instances.

**/


var Task = function(data) {
	this.name = data.name;
	this.completed = false;
}

Task.prototype.complete = function (){
	console.log('completing task: ' + this.name);
	this.completed = true;
}

Task.prototype.save = function(){
		console.log('saving Task: ' + this.name);
}



//gives reference to this Task module
module.exports = Task;
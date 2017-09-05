/** 
	Constructor Pattern

	<!> new keyword : creates a new object and links an object prototype
	<!> it b inds 'this" to the new object scope
	<!> it implicitly returns this

	function ObjectName(param1, param2){
		this.param1 = param1;
		this.param2 = param2;
		this.toString = function (){
			return this.param1 + ' ' + this.param2;
		}

		
		return this <- 	this code in implicitly defined in this objects definition 
						in javascript ANY time the 'new' keyword is used with this object.
						It does not need to be typed! 
	}

**/


var Task = function(name) {
	this.name = name;
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
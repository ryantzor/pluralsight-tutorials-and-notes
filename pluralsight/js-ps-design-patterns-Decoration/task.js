//Decorator Javascript pattern//

/** 
	The principle here is that you want to extend the funtionality of your task object 
	but you don't want to tamper with the original object so you use the 
	decoration design pattern shown below
**/


// TASK EXAMPLE

var Task = function(name) {
	this.name = name;
	this.completed = false;
}

Task.prototype.complete = function() {
	console.log('Completeing Task: ' + this.name);
	this.completed = true;
};

Task.prototype.save = function() {
	console.log('saving task: ' + this.name);
}

var myTask = new Task('Legacy task');
myTask.complete();
myTask.save();


/** 
	Decoration starts here. We are adding functionality to the original task in our new Urgent task object.
	
	<!> We can even edit the save function to be a function (line 45)
	<!> (line 47) we can also call the originial Task save method on this line we can do .call(this)
	which allows us to use the "this" keyword and bind the save method from the original Task obj

**/


var urgentTask = new Task('Urgent Task');
urgentTask.priority = 2;
urgentTask.notify = function(){
	console.log("notifying the important people or i'll get fired")
}

//urgentTask.notify();
//urgentTask.complete();
urgentTask.save = function(){
	this.notify();
	Task.prototype.save.call(this);
	};

urgentTask.save();




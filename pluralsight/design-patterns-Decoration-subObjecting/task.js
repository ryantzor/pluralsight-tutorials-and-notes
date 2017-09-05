// "Subobjecting" using Decorator Javascript pattern//

/** 
	The principle here is "subObjecting" - a true inheritance is going 
	on by creating this SubObject called 'urgentTast' 
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
**/

var UrgentTask = function(name, priority){
	Task.call(this, name);
	this.priority = priority;
}


/**
	 Important to do this instead of UrgentTask.prototype = Task.prototype. 
	 If you run the code on line (41) instead, you would be changing Task's properties 
	 everytime you edited the props of UrgentTask
**/

UrgentTask.prototype = Object.create(Task.prototype);

UrgentTask.prototype.notify = function(){
	console.log('notifying important people');
}

/**
	What's cool here:
	On line (62) we are calling the original
	task save method and inheriting it 
	for our urgent task we created by calling it using (this)
**/

UrgentTask.prototype.save = function(){
	this.notify();
	console.log('doing special stuff before we save');
	Task.prototype.save.call(this);
}



var ut = new UrgentTask('This is urgent', 1);
ut.complete();
ut.save();
console.log(ut);







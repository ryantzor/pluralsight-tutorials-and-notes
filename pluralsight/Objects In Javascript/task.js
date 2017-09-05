/**
	Simple inheritance example
**/


var task = {
	title: 'My Title',
	description: 'My Description'
};

Object.defineProperty(task, 'toString', {
	value: function(){
			return this.title + ' ' + this.description;
	},
	writable: false,
	enumerable: false,
	configurable: false
});


// Inheritance
var urgentTask = Object.create(task);

/**
	 Even though we set Task's Writable property 
	 equal to false, we can still inherit Task
	 and change the toString with our inherited object
**/

Object.defineProperty(urgentTask, 'toString', {
	value: function(){
			return this.title + ' ' + 'is an urgent task';
	},
	writable: false,
	enumerable: false,
	configurable: false
});


console.log(urgentTask.toString());
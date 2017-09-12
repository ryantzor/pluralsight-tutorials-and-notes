/**

	The Facade Pattern: it hides the chaos from us
	and simplifies the interface

	Think about Jquery, at it's core all it does 
	is sit on top of the DOM and give you a simple
	and clean interface to deal with the DOM

**/


var Task = function (data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
}

var TaskService = function () {
    return {
        complete: function (task) {
            task.completed = true;
            console.log('completing task: ' + task.name);
        },
        setCompleteDate: function (task) {
            task.completedDate = new Date();
            console.log(task.name + ' completed on ' + task.completedDate);
        },
        notifyCompletion: function (task, user) {
            console.log('Notifying ' + user + ' of the completion of ' + task.name);
        },
        save: function (task) {
            console.log('saving Task: ' + task.name);
        }
    }
}();

var TaskServiceWrapper = function () {

    var completeAndNotify = function (task) {
        TaskService.complete(myTask);
        if (myTask.completed == true) {
            TaskService.setCompleteDate(myTask);
            TaskService.notifyCompletion(myTask, myTask.user);
            TaskService.save(myTask);
        }
    }
    return {
        completeAndNotify: completeAndNotify
    }

//this line on 56 is an execute syntax here, 
//because we are using one file. Typically you would end your module with that () notation
}();

var myTask = new Task({
    name: 'MyTask',
    priority: 1,
    project: 'Courses',
    user: 'Jon',
    completed: false
});
//console.log(myTask);
TaskServiceWrapper.completeAndNotify(myTask);

console.log(myTask);
//
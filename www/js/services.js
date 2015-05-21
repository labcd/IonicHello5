angular.module('services', [])

.factory('Tasks', function(){

	var tasks = [
		{id: 1, name: 'Pick up Groceries', deadline: 'Friday', user: 'Roger Smith'},
		{id: 2, name: 'Wash Car', deadline: 'Saturday', user: 'Roger Smith'},
		{id: 3, name: 'Take Out Garbage', deadline: 'Sunday', user: 'Roger Smith'}
	];

	return {
    	all: function() {
      		return tasks;
    	},
    	add: function(task){
    		tasks.push(task);
    	},
    	remove: function(task){
    		tasks.splice(tasks.indexOf(task), 1);
    	}
	};

});
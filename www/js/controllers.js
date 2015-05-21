angular.module('controllers', [])

.controller('TasksController', function($scope, Tasks){
	
	$scope.tasks = Tasks.all();

	$scope.remove = function(task){
		Tasks.remove(task);
	}

})

.controller('TasksDetailController', function($scope, $state, Tasks){
	
	$scope.add = function(task){
		Tasks.add(task);
		$state.go('list');
	}

});
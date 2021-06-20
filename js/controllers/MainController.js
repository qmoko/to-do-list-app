app.controller('MainController', ['$scope', function($scope) {
	$scope.list = ["Clean my room", "Go to the shops", "Study Angular JS basics today"];
	$scope.addItem = function(){
		$scope.list.push($scope.addToDo);
	}
}])

// WHAT IS SCOPE?
// so the controller (this file) can set the data in the scope
// whereas the index.html (aka 'the view') can see what is IN the scope
// this is how the view and the controller communicate! 
// Thru the scope object
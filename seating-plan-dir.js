
var directives = directives || angular.module('directives', []);

directives.directive('seatingPlan', function (studentsSrv) {

	function sortUpdate(sortable) {

		// update each student's desk based on the DOM order
		var children = sortable.children();
		for(var i = 0; i < children.length; i++)
		{
			var studentId = children[i].id;
			studentsSrv.get(studentId).desk = i + 1;

		}
	}

	function link(scope, element, attrs) {

		scope.students = studentsSrv.get();
		
		// apply the sortable plugin to the list of students
		// have it notify us when an item is sorted
		var sortable = element.find('#sortable');
		sortable.sortable();
		sortable.disableSelection();
		sortable.on("sortupdate", function(event, ui) {
			sortUpdate(sortable);
		});
	};

	return {
		restrict: 'E',
		templateUrl: 'seating-plan.html',
		link: link
	};
});
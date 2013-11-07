var services = services || angular.module('services', []);

services.factory('studentsSrv', ['$filter', function($filter) {
  
  var students = [
	{
		"firstName": "Colby",
		"lastName": "Cabrera",
		"gender": "Male",
		"dob": "2004-02-14",
		"id": 9424,
		"desk": 1
	},
	{
		"firstName": "Edward",
		"lastName": "Saunders",
		"gender": "Male",
		"dob": "2004-06-25",
		"id": 9054,
		"desk": 2
	},
	{
		"firstName": "Caleb",
		"lastName": "Garza",
		"gender": "Male",
		"dob": "2004-03-19",
		"id": 9958,
		"desk": 3
	},
	{
		"firstName": "Barclay",
		"lastName": "Aguirre",
		"gender": "Male",
		"dob": "2004-04-27",
		"id": 9860,
		"desk": 4
	},
	{
		"firstName": "Fuller",
		"lastName": "York",
		"gender": "Male",
		"dob": "2004-02-08",
		"id": 9935,
		"desk": 5
	},
	{
		"firstName": "Dennis",
		"lastName": "Bradley",
		"gender": "Male",
		"dob": "2004-03-18",
		"id": 9417,
		"desk": 6
	},
	{
		"firstName": "Keane",
		"lastName": "Lowery",
		"gender": "Male",
		"dob": "2004-10-12",
		"id": 9101,
		"desk": 7
	},
	{
		"firstName": "Luke",
		"lastName": "Cross",
		"gender": "Male",
		"dob": "2004-10-28",
		"id": 9664,
		"desk": 8
	},
	{
		"firstName": "Nigel",
		"lastName": "Curtis",
		"gender": "Male",
		"dob": "2004-08-07",
		"id": 9523,
		"desk": 9
	},
	{
		"firstName": "Louis",
		"lastName": "Mayo",
		"gender": "Male",
		"dob": "2004-02-25",
		"id": 9704,
		"desk": 10
	},
	{
		"firstName": "Nash",
		"lastName": "Roth",
		"gender": "Male",
		"dob": "2004-03-29",
		"id": 9834,
		"desk": 11
	},
	{
		"firstName": "Brendan",
		"lastName": "Burgess",
		"gender": "Male",
		"dob": "2004-07-17",
		"id": 9653,
		"desk": 12
	},
	{
		"firstName": "Carter",
		"lastName": "Fernandez",
		"gender": "Male",
		"dob": "2004-10-17",
		"id": 9984,
		"desk": 13
	},
	{
		"firstName": "Brock",
		"lastName": "Gross",
		"gender": "Male",
		"dob": "2004-08-13",
		"id": 9991,
		"desk": 14
	},
	{
		"firstName": "Zephania",
		"lastName": "Pratt",
		"gender": "Male",
		"dob": "2004-06-23",
		"id": 9987,
		"desk": 15
	},
	{
		"firstName": "Uriel",
		"lastName": "Anthony",
		"gender": "Male",
		"dob": "2004-06-08",
		"id": 9079,
		"desk": 16
	},
	{
		"firstName": "Ezra",
		"lastName": "Mcconnell",
		"gender": "Male",
		"dob": "2004-03-27",
		"id": 9626,
		"desk": 17
	},
	{
		"firstName": "Henry",
		"lastName": "Dejesus",
		"gender": "Male",
		"dob": "2004-12-04",
		"id": 9839,
		"desk": 18
	},
	{
		"firstName": "Blaze",
		"lastName": "Watson",
		"gender": "Male",
		"dob": "2004-09-06",
		"id": 9056,
		"desk": 19
	},
	{
		"firstName": "Logan",
		"lastName": "Mccullough",
		"gender": "Male",
		"dob": "2004-05-30",
		"id": 9633,
		"desk": 20
	},
	{
		"firstName": "Erich",
		"lastName": "Fisher",
		"gender": "Male",
		"dob": "2004-02-11",
		"id": 9430,
		"desk": 21
	},
	{
		"firstName": "Carl",
		"lastName": "Hernandez",
		"gender": "Male",
		"dob": "2004-05-26",
		"id": 9548,
		"desk": 22
	},
	{
		"firstName": "Ross",
		"lastName": "Mcfadden",
		"gender": "Male",
		"dob": "2004-08-09",
		"id": 9830,
		"desk": 23
	},
	{
		"firstName": "Reese",
		"lastName": "Pittman",
		"gender": "Male",
		"dob": "2004-09-03",
		"id": 9197,
		"desk": 24
	},
	{
		"firstName": "Rashad",
		"lastName": "Phillips",
		"gender": "Male",
		"dob": "2004-05-15",
		"id": 9937,
		"desk": 25
	},
	{
		"firstName": "Rafael",
		"lastName": "Munoz",
		"gender": "Male",
		"dob": "2004-07-19",
		"id": 9954,
		"desk": 26
	},
	{
		"firstName": "Stephen",
		"lastName": "Adkins",
		"gender": "Male",
		"dob": "2004-08-04",
		"id": 9538,
		"desk": 27
	}	
];

  return {
      get: function (id) {
      	return typeof id === 'undefined' ? 
      			students : $filter('filter')(students, {id: id}, true)[0];
      },
      
      create: function (student) {
      	student.desk = students.length;
        students.push(angular.copy(student));
      },

      delete: function (student) {
		students.splice(students.indexOf(student), 1);
      },   
  };

}]);
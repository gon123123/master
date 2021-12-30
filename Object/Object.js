function run(name, year_of_birth) {
	var d = new Date();
	var current_year = d.getUTCFullYear();
	// define a object 
	var Person = {
		name : name ,
		year_of_birth : year_of_birth,
		address : "Ha Noi"
	};

	// Calculate age
	var age = current_year - Person.year_of_birth ;
	
	console.log(Person); // print object
	console.log(Person['name'] + " is " + age + " years old");
}
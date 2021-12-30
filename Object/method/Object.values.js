function run() {
	var person  = {
		firstName:"Trung",
		lastName:"Vuong",
		age:50,
		eyeColor:"blue"
	};
	var valueObj = Object.values(person);
	for(let value of valueObj){
		console.log(value);
	}
}
function run() {
	var person  = {
		firstName:"Trung",
		lastName:"Vuong",
		age:50,
		eyeColor:"blue"
	};
	var keyObj = Object.keys(person);
	for(let value of keyObj){
		console.log(value);
	}
}
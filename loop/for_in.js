function run(){
	var person = {
		name: "Tuan Phong",
		age: 1,
		addr: "Ha Noi",
		is_boy: true
	};
	for (value in person) {
	  console.log(value +" is "+person[value]);
	}
}

// tạo một đôi tượng mới kế từ thuộc tính và phương thức của đối tượng được kế thừa
function run(name, job) {
	const person = {    // đối tượng bị kế thừa
	  name: "",
	  job: "",
	  printIntroduction: function () {
		console.log(`My name is ${this.name}. My job is ${this.job}`);
	  }
	};
	
	const me = Object.create(person); // tạo đối tượng kế thừa đối tượng cũ 
	me.name = name ;
	me.job = job ;

	me.printIntroduction();
}
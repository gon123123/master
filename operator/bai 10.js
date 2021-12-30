// Tìm 2 số khi biết tổng và hiều. Cho 2 số là tổng và hiệu của 2 số a và b. Viết function tính toán a và b và in ra màn hình
function run(sum, different){
	// a + b = sum ;
	// a - b = diffrent ;
	// a = sum - b ;
	// (sum - b) - b = diffrent ;
	// sum - b - b = diffrent ;
	// -2b = diffrent - sum ;
	//  b = (diffrent - sum )/(-2)
	// => tìm được b
	// a = sum - b ; //=> tìm được a
	var b = (different - sum)/(-2);
	var a = sum - b;

	console.log('a is ' + a + " and b is " + b);
}

function run(a, b, c, d) {
	var sorted_str = "";

	var arr = [a, b, c, d];
	sorted_str += arr.sort(function (x, y) { return y - x });
	console.log(sorted_str);
}

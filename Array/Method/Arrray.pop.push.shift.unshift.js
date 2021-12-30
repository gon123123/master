// xóa phần tử đầu mảng , xóa phần tử cuối mảng , thêm vào vào cuối mảng .
var data = ['ab','cd','ef'];
function run(data) {
	data.shift();
	data.pop();
	data.push("X");
	console.log(data);
}
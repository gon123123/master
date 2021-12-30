// thay đổi phần tử của một chuỗi , xóa kí tự tráng ở đầu , cuối chuỗi 
var str =' javascript is cool';
function run(str) {
	var text ="";
	text = str.replace(/[a]/g,4);
	text = text.replace(/[e]/g,3);
	text = text.replace(/[i]/g,1);
	text = text.replace(/[o]/g,0);
	text = text.replace(/[s]/g,5);
	var newText = text.trim();
	console.log(newText);
}
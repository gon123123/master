// chuyển đổi kí tự đầu tiên của chuỗi thành chữ hoa 
var str = "bui Minh Tuan";
function ucFirst(str) {
	var first_letter  = str.charAt(0);
	var rest  = str.slice(1);
	
	var first_character = first_letter.toUpperCase();
	var text = first_character.concat(rest);
	console.log(text);
}
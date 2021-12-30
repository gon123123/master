// tạo một phương thướng mới cho string 
// dùng phương thức mới để iểm tra độ dài cuản chuỗi 
// phương thức được tạo ra từ prototype là toàn cục 
String.prototype.is_big = function(){
	if(this.length > 10){   // this == name 
		return true;
	}else{
		return false;
	}
}
function run(name) {        // name đây
	var result = name.is_big();
	console.log(result);
}
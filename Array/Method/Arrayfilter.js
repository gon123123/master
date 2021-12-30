// tạo một mảng mới chứa các phần tử vượt qua điều kiện 
function kt(value){
	return value > 0 ;
}
function run(data) {
	var newArr = data.filter(kt);
	console.log(newArr);
}

// // bai 2 : kiểm tra phần tử của mảng có chứa kí tự , chuỗi kí tự cần kiểm tra không 
// // nếu chứa trả về mảng mói với pt thông qua nếu không thì trả về mảng rỗng
// var strings = ['php','javascript','node.js','hocj php'];
// var keyword = 'php';
// function findStringsInArrayByKeyword(keyword, strings) {
//     var newArr = strings.filter(function (element){
//         return (element.includes(keyword))? element :null;
//     });
//     if(newArr != null){
//         return newArr;
//     }else{
//         return [];
//     }
// }
//bài 3 : trả về mảng mới có phần tử là hần tử đều có mặt ở hai mang array1 , array2 
// var array1 = [1,2,3,4,5,6,7];
// var array2 = [2,6,3,8,9];
// function findEqualValues(array1,array2){
//     var newArr = array1.filter(function (element){
//         for(var value of array2){
//           if(element === value) {
//             return element ;
//           }
//         }
//     });
//     if(newArr != null){
//         return newArr ;
//     }else{
//         return [];
//     }
// }
// findEqualValues(array1, array2);
// bài tập viết lại hàm filter 
// Array.prototype.filter2 = function (callback) {
//     var outArr = [];
//     for(let index in this ){
    // hasOwnProperty kiểm tra xem một đối tượng có chứa thuộc tính được chỉ định không
//         if(this.hasOwnProperty(index)){
//             var result = callback(this[index],index,this);
//             if(result){
//                 outArr.push(this[index]);
//             }
//         }
//     }
//     return outArr;
// }
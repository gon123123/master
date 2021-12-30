// kiểm tra xem các phần tử trong mảng có vượt qua kiểm tra bởi hàm được cung cấp không 
var data = [23,4,6,7,8,9,10,11,12,13,14,15];

function kt(value){
	return (value % 2 == 0) ? true : false ;
}
function run(data) {
	var ktArray = data.every(kt);
		if (ktArray) {
			console.log("Yes");
		} else {
			console.log("No");
		}
}
// // kiểm tra xem các giá trị trong mảng có vượt qua điều kiện không
// // mảng chứa đối tượng
// var myArr = [
//     {
//       id : 0,
//       name : 'php',
//       coin : 0
//     },
//     {
//       id : 1,
//       name : 'laravel',
//       coin : 0
//     },
//     {
//       id : 2,
//       name : 'javascript',
//       coin : 0
//     },
//     {
//       id : 3,
//       name : 'node.js',
//       coin : 0
//     },
//     {
//       id : 4,
//       name : 'html',
//       coin : 0
//     },
//     {
//       id : 55,
//       name : 'css',
//       coin : 0
//     }
//   ];
//   var isFree = myArr.every(function (course,vitri){
//     return course.coin === 0 ; // kiểm tra giá có bằng không không 
//   });
//   console.log(isFree);\
//bài tập viết lại phương thức every
Array.prototype.every2 = function (callback) {
    for(let index in this){
        // hasOwnProperty trả về true nếu như thuộc tính nằm trong đối tượng 
        if(this.hasOwnProperty(index)){
            if(!callback(this[index]),index,this){
                return false;
            }
        }
    }
    return true;
}
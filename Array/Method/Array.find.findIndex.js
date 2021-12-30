// kiểm tra xem và trả về giá trị - vị trí của phần tử có giá trị dương đầu tiên  
function kt(value){
	return value > 0;
}
var data = [-2,-6,-3 , 5, 8, 11];
function run (data) {
	var posValue = data.find(kt);
	var pos = data.findIndex(kt);
	if(posValue){
		console.log(`${pos} ${posValue}`);
	}else{
		console.log("No result");
	}
	
}
// // kiểm ra trong mảng có phần tử nào có tên là php không  
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
//   var isFree = myArr.find(function (course,vitri){
//     return course.coin === 'php' ; // kiểm tra giá có bằng không không 
//   });
//   console.log(isFree);
// kiểm tra xem ít nhất một phần tử trong mảng có vượt qua kiểm tra hay không 
function kt(value){
	if(value % 2 == 0){
		return true;
	}
}
function run(data) {
	var kt_CL = data.some(kt);
	if (kt_CL) {
		console.log("Yes");
	} else {
		console.log("No");
	}
}
// // kiểm tra xem ít nhất một phần tử vượt qua kiểm tra 
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
//   var isFree = myArr.some(function (course,vitri){
//     return course.coin === 0 ; // kiểm tra giá có bằng không không 
//   });
//   console.log(isFree);
// bài tập viết lại phương thức some  
Array.prototype.some2 = function (callback){
    for(let index in this){
        if(this.hasOwnProperty(index)){
           if(callback(this[index],index,this)){
               return true ;
           };
        }
    }
    return false ;
}

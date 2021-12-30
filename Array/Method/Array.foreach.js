// gọi một hàm cho mỗi mảng
var data = [1, 4, 3, 7, 8, 10, 30, 15];
function run(data) {
  data.forEach(function (element) {
    if (element % 5 == 0) {
      console.log(element);
    }
  });
}
// bài tập 2: in ra vị trí , đối tượng trong mảng
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
//   myArr.forEach(function (course,vitri){
//     console.log(vitri ,course);
//   });

//  bài tập3 : trả về một đối tượng có các key và value tương ứng
// input
// [
//     {filed: 'name' , value : 'Sơn Đặng'},
// ]
// output
// {name:'Sơn Đặng'}
// var formValues = [
//         {filed: 'name' , value : 'Sơn Đặng'},
//     ]
// function getRequestBodyFromValues(formValues) {
//     var user = {};

//     formValues.forEach(function listUser(element){
//          return user[element.field] = element.value;
//     });
//  //     mảng cững là một đối tượng
//        return user;

//  }
// bai tap viet lam ham forEach
// Array.prototype.forEach2 = function(callback) {
//    for(let index in this){
//     if(this.hasOwnProperty(index)){
//          element ,index , arr
//          callback(this[index],index,this);
//     }
// }
//}

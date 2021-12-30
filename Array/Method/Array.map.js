// trả về một mảng mới với các phần tử trong mảng là giá trị tuyệt đối
// function abs(value) {
//   return Math.abs(value);
// }
// function run(data) {
//   var arr_abs = data.map(abs);
//   console.log(arr_abs);
// }
// // bài 2 thay đổi thuộc tính của đối tượng trong mảng
// var courses = [
//     { 
//         id: 1,
//         name: "javascript",
//         coin: 250 
//     },
//     { 
//         id: 2,
//         name: "php",
//         coin: 250 
//     },
//     { 
//         id: 3,
//         name: "react",
//         coin: 250 
//     },
//     { 
//         id: 4,
//         name: "laravel",
//         coin: 250 
//     },
//     { 
//         id: 5,
//         name: "node.js",
//         coin: 250 
//     },
//     { 
//         id: 6,
//         name: "chart.js",
//         coin: 250 
//     },
//     { 
//         id: 7,
//         name: "master.js",
//         coin: 250 
//     }
// ];
// function addNameProperties(course){
    // trar về một đối tượng object 
//     return {
//         id : course.id,
//         name : 'khoa hoc ' + course.name ,
//         coin : 'Gia ' +course.coin
//     }
// }
// var newArr = courses.map(addNameProperties) ;
// console.log(newArr);
// bài 3 Hãy xử lý để hàm trên trả về một mảng mới gồm các phần tử được chuyển đổi sang kiểu dữ liệu boolean
// Làm bài tập tại đây
// var inputs = new Array([1,2,NaN,false,0,'']);
// function convertToBoolean(inputs) {
//     var newArr = inputs.map(function (element){
//         return (!!element);
//     });
//    return newArr ;
// }
//  bài 4 : //hãy trả về array mới từ array inputs đã cho với giá trị các phần tử có giá trị x 3 lần.
// var inputs = [3,4,5,6,78,9];
// function run(inputs) {
//     var newArr = inputs.map(function (element){
//         return element * 3 ;
//     });
//     return newArr ;
// }
// bài 5 trả về một array mới từ array inputs, các phần tử trong array trả về được chuyển đổi sang kiểu dữ liệu number.
// var inputs = ['1','4','6','7','9'];
// var inputs = [3,4,5,6,78,9];
// function convertToNumber(inputs) {
//     var newArr = inputs.map(function (element){
//         return Number(inputs);
//     });
//     return newArr ;
// }
// bài 6 // trả về một array mới từ array numbers, các phần tử trong array trả về được chuyển đổi sang kiểu dữ liệu string.
// function convertToString(numbers) {
//     var newArr = numbers.map(function (element){
//         return element.toString();
//     });
//     return newArr;
// }
// bài 7 //  render ra HTML cho giao diện website.
// var arr = ['BMW','NOKIA','SAMSUNG'];
//  function getHTMLfromArray(arr){
//     var newArr = arr.map(function (element){
//         return '<li>' +element+'</li>';
//     });

//    return newArr ;
// }
// bài 8 //từ mảng chứa các đôi tượng render ra HTML cho giao diện website.
// var arr = ['BMW','NOKIA','SAMSUNG'];
// function getHTMLfromArray (object){
//     var newArr = object.map(function (element){
//         return '<li>'+element.name+'</li>'
//     });
//     return newArr;
// }
// /bài tập viết lại phương thức map trong array
// Array.prototype.map2 = function(callback) {
//     var outArr = [];
//     if (typeof callback == 'function') {
//       for (let item of this) {
//         var result =  callback(item);
//         outArr.push(result);
//       }
//     }
//     return outArr;
//   }
//   function run(arr) {
//     var newArr = arr.map2(function nhan(item) {
//       return item * 10;
//     });
//     return newArr;
//   }
  
//   var arr = [1, 2, 3, 4, 4, 5];
//   run(arr);
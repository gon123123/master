var arr = [
    {
      id: 1,
      name: 'php',
      coin: 100
    },
    {
      id: 2,
      name: 'java',
      coin: 200
    },
    {
      id: 3,
      name: 'javascript',
      coin: 300
    },
    {
      id: 4,
      name: 'node.js',
      coin: 400
    },
    {
      id: 5,
      name: 'react',
      coin: 500
    },
    {
      id: 6,
      name: 'angular',
      coin: 600
    },
    {
      id: 7,
      name: 'laravel',
      coin: 700
    }
  ];
  var i =0;
  function totalElement(accumulator, currentValue) {
    i++ ;
    var total =  accumulator + currentValue.coin;
    console.table({
      'id': i,
      'gia khoa hoc': currentValue.coin,
      'gia ban le':total 
    });
    return total ;
  }
  var newSum = arr.reduce(totalElement,0);
  console.log(newSum);
// bài 2 //ttrả về tổng của toàn bộ giá trị của các phần tử trong mảng numbers
// var numbers = [3,5,6,7,4,9,7];
// function sum(numbers) {
//     var result = numbers.reduce(function (total,curentValue){
//         return total + curentValue;
//     });
//     return result ;
// }
// bài 3 //hãy trả về tổng của toàn bộ giá trị số hợp lệ của các phần tử trong mảng inputs
// function sumNumbers(inputs) {
//     var result = inputs.reduce(function (total,currentValue){
// dùng isInteger 
//         if(Number.isInteger(currentValue)=== true){
//             return total += currentValue ;
//         }else{
//           return total  ;
//         }
//     },0);
//     return result ;
// }
// var inputs = ['hi', 3, 3] ;
// sumNumbers(inputs);
// bài 4 //tính tổng số tiền một đơn hàng. 
// function getTotalAmount(arr){
//     var result = arr.reduce(function (total,currentValue){
//         return total +=currentValue.amount;
//     });
//     return result ;
// }
// var arr = [ 
//    { name: 'Giày', amount: 100 },
//    { name: 'Áo phao', amount: 110 }, 
//    { name: 'Smart phone', amount: 400 }, ];
// getTotalAmount(arr);
// bài 4 tạo thêm phương thức reduce2 giống với reduce cũ 
// Array.prototype.reduce2 = function(callBack, initialValue) {
//     if (initialValue == undefined) {
//       initialValue = 0;
//     }
//     var total = initialValue;
//     for (let index in this) {
//       total = callBack(total, this[index]);
//     }
//     return total ;
//   }
//   var data = [1,2,3,4,5];
//   function sum(arr){
//     var newArr = arr.reduce2(function (total,currentValue){
//         return total += currentValue;
//     });
//     return newArr ;
//   }
//   sum(data);

// sắp xép các phần tử của mảng thưo thứ tự tăng dần
var data = [1, 5, 6, 2, 3, 9, 0, 45, 22, 35, 3];
function sapXep(a, b) {
  return a - b;
}
function run(data) {
  var newArr = data.sort(sapXep);
  console.log(newArr);
}
// // sắp xếp một đối tượng , mảng được coi là đối tượng typeOf = 'object'
// var obj = [
//     { name: "tuan", age: 20, address: "bien dong" },
//     {name: "tai" , age: 21, address: "bien bac"},
//     {name: "huy" , age: 18, address: "bien tay"},
//     {name: "nobita" , age: 19, address: "bien nam"}
// ];
// // c1
// var arrSort = obj.sort(function(a,b){       // săp xếp theo age có giá trị là số 
//     return a.age -b.age;
// });
// console.log(arrSort);
// // c2
// var arrSort = obj.sort(function(a,b){       // sắp xếp theo name dùng cho chuỗi 
//     var nameA = a.name.toUpperCase(); // bỏ qua hoa thường
//    var nameB = b.name.toUpperCase(); // bỏ qua hoa thường
//    if (nameA < nameB) {
//      return -1;
//    }
//    if (nameA > nameB) {
//      return 1;
//    }
 
//    // name trùng nhau
//    return 0;
//  });
//  console.log(arrSort);
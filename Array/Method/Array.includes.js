// kiểm tra xem trong mảng có phần tử được chỉ định không
var data = [2, 6, 7, 8, 5, 3];
function run(data) {
  var kt_element = data.includes(5);
  if (kt_element) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

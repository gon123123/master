// in ra  vị trí chỉ mục của giá trị (2) ở đầu và cuối mảng
var data = [1, 3, 2, 4, 5, 6, 7, 2, 10, 4];
function run(data) {
  var first_index = data.indexOf(2);
  var last_index = data.lastIndexOf(2);
  if (first_index != -1 && last_index != -1) {
    console.log(`${first_index} ${last_index}`);
  } else {
    console.log("No result");
  }
}

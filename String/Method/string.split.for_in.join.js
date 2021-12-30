// viết hoa chữ cái dầu của mỗi từ

function uc_first(word) {
    var str = "";
    for (let value of word) {
      str += value.charAt(0).toUpperCase() + value.slice(1) + " ";
    }
    console.log(str);
  }
  function run(str) {
    var newArr = str.split(' ');
    uc_first(newArr);
  }
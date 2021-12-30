// kiểm tra xem n có phải là kết quả của bình phương 1 số
var n = 9 ;
function run(n){
    var can_bac = Math.sqrt(n);
    if(Number.isInteger(can_bac)){
        return true;
    }else{
        return false ;
    }
}
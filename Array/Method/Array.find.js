//  kiểm tra xem tong kho của bạn có nhân vật nào có chr số tấn công là 150 không 
var monter = [
    {
        name: 'Cá heo',
        attack: 50,
        speed: 100,
        hitpoint: 100
    },
    {
        name: 'Khủng long',
        attack: 150,
        speed: 80,
        hitpoint: 180
    }
]
function findAMonsterByAttack(monsters) {
    var kq = monsters.find(function (elementObj){
        return (elementObj.attack === 150 ) ? elementObj : null;
    });    
    if(kq != null){
        return kq;
    }else{
        return null ;
    }
}
// bài tập viết lại hàm find 
// Array.prototype.find2 = function (callback){
//     for(let index in this){
//         if(this.hasOwnProperty(index)){
//            if(callback(this[index],index,this)){
//                return this[index];
//            }
//         }
//     }
//     return undefined ;
// }
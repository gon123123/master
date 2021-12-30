var obj = {
    userName : 'tuan',
    password : 'hunter'
}
// freeze không cho sửa đổi giá trị thuộc tính hay thêm , xóa thuộc tính. 
var newObject = new Object.freeze(obj);

newObject.password = '**************';
newObject.sleep = 'true';

console.log(newObject);

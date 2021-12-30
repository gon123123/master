var obj = {
    userName : 'tuan',
    password : 'hunter'
}
// seal cho thay đổi giá trị của thộc tính đã tồn tại nhưng không thêm thuộc tính mới 
var newObject = new Object.seal(obj);

newObject.password = '**************';
newObject.sleep = 'true';

console.log(newObject);

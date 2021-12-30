// Cloning an object
var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }


// Merging objects with same properties
var o1 = { a: 1, b: 1, c: 1 };
var o2 = { b: 2, c: 2 };
var o3 = { c: 3 };

var obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
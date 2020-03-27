//如何实现对象深浅拷贝？
// let obj = {age: 11, parent: { father: 'xx', mother: 'xx' } };
/**
 * 方法一：JSON.parse(JSON.stringify(obj))
 * 但存在一些问题：
 * 1.无法复制函数与正则对象
 * 2.会抛弃对象的constructor,所有的构造函数会指向Object
 */
function Person(name) {
  this.name = name;
}
let Messi = new Person('Messi');

let obj = {
  a: Person,
  b: new RegExp('a', 'g'),
  c: Messi
};
let newObj = JSON.parse(JSON.stringify(obj));
console.log(newObj.a, obj.a);  //undefined  function Person(){}
console.log(newObj.b, obj.b); //{}  /a/g
console.log(newObj.c.constructor, obj.c.constructor); //[function Object] [function Person]


/**
 * 方法二：cloneDeep
 * 利用递归来实现深拷贝，如果对象属性的值是引用类型（Array,Object）,那么对该属性进行深拷贝，直到遍历到属性的值是基本类型为止
 */
let obj = {age: 11, parent: { father: 'xx', mother: 'xx', sun: [1,2,3] } };
function getType(obj) {
  let type = Object.prototype.toString.call(obj);
  let map = {
    '[object Boolean]'  : 'boolean',
    '[object Number]'   : 'number',
    '[object String]'   : 'string',
    '[object Function]' : 'function',
    '[object Array]'    : 'array',
    '[object Date]'     : 'date',
    '[object RegExp]'   : 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]'     : 'null',
    '[object Object]'   : 'object'
  };
  return map[type]
}
function deepClone(obj) {
  // let type = getType(obj); //调取方法
  let type = Object.prototype.toString.call(obj);
  type = type.slice(1,type.length-1).split(' ')[1];
  type = type.charAt(0).toLowerCase()+type.slice(1);
  let newObj;
  if (type === 'object') {
    newObj = {};
  } else if(type === 'array'){
    newObj = [];
  } else {
    return obj
  }
  if (type === 'object') {
    for (let key in obj) {
      newObj[key] = deepClone(obj[key]);
    }
  } else if (type === 'array') {
      for (let i = 0; i<obj.length; i++){
        newObj.push(deepClone(obj[i]));
      }
  }
  return newObj;
}
let newObj = deepClone(obj);
obj.age = 22;
obj.parent.father = 'yy';
obj.parent.sun.push(4);
console.log(obj);     //{age: 22, parent: { father: 'yy', mother: 'xx', sun: [1,2,3,4] } }
console.log(newObj);  //{age: 11, parent: { father: 'xx', mother: 'xx', sun: [1,2,3] } }

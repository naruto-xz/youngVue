// 1.费布那切数列
// 1、1、2、3、5、8、13、21、34、……
// 在数学上，斐波纳契数列以如下被以递归的方法定义：F(0)=1，F(1)=1, F(n)=F(n-1)+F(n-2)

function fn(n) {
  if (n <= 1) {
    return 1;
  }
  return fn(n - 1) + fn(n - 2);
}
let res = fn(4);
console.log(res); //5

//编写一个javscript函数 fn，该函数有一个参数 n（数字类型），其返回值是一个数组，
// 该数组内是 n 个随机且不重复的整数，且整数取值范围是 [2, 32]。
function fn(n) {
  let array = new Array();//创建一个空的数组，存储要返回的数组。
  for(let i= 0; i<n; i++) {
    //获得2到32范围的随机数
    let rnd = getRand(2, 32);
    if(isIncluded(rnd, array)) {
      i--;
      //如果数组里面有这个数，让i在下一个循环不变。
      //这里的i--抵消掉了循环后的i++
    } else {
      array.push(rnd);//如果数组里没有这个随机数，就允许添加进这个数组。
    }
  }
  return array;
}

//传递一个数据类型和数组，判断数组内是否有前者。
function isIncluded(rnd, array) {
  for (let i = 0; i < array.length; i++) {
    if(array.indexOf(rnd) > -1) {
      return true;
    }
  }
  return false;
}

//传入一个范围，返回一个该范围的随机数。
function getRand(min, max) {
  return Math.ceil(Math.random() * (max - min)+min);
}

let res = fn(3);
console.log(res);

//来自牛客网 （前端练习题1）

function one() {
  var name = 'zs';
  var demo = {
    name: 'ls',
    getName: function () {
      return this.name;
    }
  };

  let another = demo.getName;
// console.log(another()); //zs

// let another1 = another.bind(demo);
// console.log(another1());  //ls
//
// console.log(another.apply(demo)); //ls

//手写bind
  function bindThis(fn, target) {
    return function () {
      return fn.apply(target, arguments);
    }
  }
  let another2 = bindThis(another, demo);
  let res = another2(demo);
  console.log(res); //ls

  Function.prototype.binds = function (oTarget) {
    var self = this;
    return function () {
      return self.apply(oTarget, arguments);
    }
  };
  let another3 = another.binds(demo);
  console.log(another3());  //ls

// Function.prototype.bind = function(oThis){
//   var self=this;
//   var args = Array.prototype.slice.call(arguments,1);
//   return function(){
//     return self.apply(oThis,args.concat(Array.prototype.slice.call(arguments)));
//   };
// };

  Function.prototype.bind = function (target) {
    let self = this;
    let args = Array.prototype.slice.call(arguments, 1);
    return function () {
      return self.apply(target, args.concat(Array.prototype.slice.call(arguments)))
    }
  };
  let another4 = another.bind(demo, 'a', 'b');
  console.log(another4('c')); //ls
}

/**
 * 获取 url 中的参数
 1. 指定参数名称，返回该参数的值 或者 空字符串
 2. 不指定参数名称，返回全部的参数对象 或者 {}
 3. 如果存在多个同名参数，则返回数组
 */
(function () {
  return;
  let url = 'http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe';
  function getUrlParam(sUrl, sKey) {
    let arr = sUrl.split('?')[1].split('#')[0].split('&');
    let obj = {};
    arr.forEach(item => {
      let [key, val] = item.split('=');
      if (obj[key]) {
        obj[key] = [].concat(obj[key], val);
      } else {
        obj[key] = val;
      }
    });
    //因为undefined在javascript中不是保留字。也就是说你可以给undefined赋值：var undefined = 'hello world';
    //通过采用void 0比采用字面上的undefined更靠谱更安全，应该优先采用void 0这种方式。
    return sKey === void 0 ? obj : obj[sKey] || '';
  }

  //正则
  // function getUrlParam(sUrl, sKey) {
  //   let result, obj = {};
  //   sUrl.replace(/[\?&]?(\w+)=(\w+)/g, function(k0, k1, k2){    //k0: &key=1   k1: key   key2: 1
  //     obj[k1] === void 0 ? obj[k1] = k2 : obj[k1] = [].concat(obj[k1], k2);
  //   });
  //   sKey === void 0 || sKey === '' ? result = obj : result = obj[sKey] || '';
  //   return result;
  // }

  let res = getUrlParam(url, 'key');
  console.log(res);
})();

/**
 * 查为 Array 对象添加一个去除重复项的方法
 */
(function () {
  return;
  let arr = [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN];
  //es6语法
  Array.prototype.uniq = function () {
    return [...new Set(this)];
  };

  // Array.prototype.uniq = function () {
  //   let obj = {};
  //   let arr1 = [];
  //   for (let i = 0; i<this.length; i++) {
  //     if (JSON.stringify(this[i]) === '{}') {
  //       arr1.push(this[i]);
  //     } else {
  //       if (!obj[this[i]]) {
  //         arr1.push(this[i]);
  //         obj[this[i]] = true;
  //       }
  //     }
  //   }
  //   return arr1;
  // };

  let res = arr.uniq();
  console.log(res); //[false, true, undefined, null, NaN, 0, 1, {}, {}, 'a']
})();

/**
 * 用 JavaScript 实现斐波那契数列函数,返回第n个斐波那契数。 f(1) = 1, f(2) = 1 等。
 */
(function () {
  //优化写法
  function fibonacci(n) {
    if (n === 1 || n === 2) {
      return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2);  //效率太低，每次都要拆解为最小的才能运算
  }

  // 优化递归（时间复杂度最低)
  //1、1、2、3、5、8、13、21、34
  // function fibonacci(n) {
  //   let a = 1, b = 1, temp = 0;
  //   if (n === 1 || n === 2) {
  //     return 1
  //   }
  //   for (let i = 3; i <= n; i++) {
  //     temp = a + b;
  //     b = a;
  //     a = temp;
  //   }
  //   return temp
  // }

  let res = fibonacci(4);
  console.log(res);
})();

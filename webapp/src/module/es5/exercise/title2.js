// 函数防抖
function debounce(fn, wait = 100) {
  let timeout = null;
  return function (...rest) {
    clearTimeout(timeout);
    timeout = setTimeout(()=> {
      fn.apply(this, rest)
    }, wait);
  }
}

//函数节流
function throttle (fn, wait) {
  let flag = false;
  return function (...rest) {
    if (flag) {
      return;
    }
    flag = true;
    setTimeout(()=> {
      fn.apply(this, rest);
      flag = false;
    }, wait)
  }
}

//函数防抖
function debounce1(fn, time = 1000) {
  let timer = null;
  let self = this;
  return function(...rest){
    clearTimeout(timer);
    timer = setTimeout(()=> {
      fn.apply(self, rest);
    }, time)
  }
}

//冒泡排序
let arr = [2,8,6,4,10];
for (let i = 0; i<arr.length - 1; i++) {
  for(let j = 0; j<arr.length - 1 - i; j++){
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] =  temp;
    }
  }
}

//树结构
let tree = [
  {
    title: 'parent 1',
    expand: true,
    children: [
      {
        title: 'parent 1-1',
        expand: true,
        children: [
          {
            title: 'leaf 1-1-1'
          },
          {
            title: 'leaf 1-1-2'
          }
        ]
      },
      {
        title: 'parent 1-2',
        expand: true,
        children: [
          {
            title: 'leaf 1-2-1'
          },
          {
            title: 'leaf 1-2-1'
          }
        ]
      }
    ]
  }
];
let arr1 = [];
tree.forEach(item => {
  arr1.push(item.title);
  loop(item);
});
function loop(data) {
  if (!data.children || !data.children.length) {
    return;
  }
  data.children.forEach(item => {
    arr1.push(item.title);
    loop(item)
  });
}
console.log(arr1);

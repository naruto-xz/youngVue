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




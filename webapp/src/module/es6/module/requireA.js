define(['./requireB'],function (value) {
  var obj = {
    x : 5,
    add: function () {
      console.log("提前加载b.js里面的内容");
      return value;
    }
  };
  return obj

});

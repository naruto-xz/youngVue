define(function (require) {
  var obj = {
    x : 5,
    add: function () {
      console.log("按需加载,用到时才加载b.js里面的内容");
      var value = require('./seaB');
      return value;
    }
  };
  return obj
});

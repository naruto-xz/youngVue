/**
*通用辅助类函数
*/
var helper = {
  //生成选项
  generateItems: function(data) {
    var items = [];
    for (var key in data) {
       items.push({
        text: data[key],
        value: key
      })
    }
    return items;
  }
};
export default helper;

<template>
    <div>
      <h5>{{title}}</h5>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          title: '数组扩展'
        }
      },
      methods: {
        operate(){
          // //下面的扩展的这些新方法都返回一个新的值
          //
          // var arr = [1,2,3,4,5];
          // find  用于找出第一个符合条件的数组成员
          // 接受三个参数，第一是值，第二个下标，第三个原数组
          // var result = arr.find(item=>item>2);
          // console.log(result);  //3
          //
          // findIndex 返回一个符合条件的成员的位置
          // var result = arr.findIndex(item=>item>2);
          // console.log(result);  //2
          //
          // findIndex与indexOf很像
          // var result = arr.indexOf(3);
          // console.log(result);  //2
          //
          // entries、keys、values  它们都会返回一个遍历器对象Array Iterator {}
          //  keys()是对键名的遍历
          //  values()是对值的遍历
          //  entries() 是对键值对的遍历
          //  var arr1 = ["a","b","c"];
          // for(var key of arr1.keys()){
          //   console.log(key);  //0,1,2
          // }
          // for(var value of arr1.values()){
          //   console.log(value);  //"a","b","c"
          // }
          // for (var [key,value] of arr1.entries()) {
          //   console.log(key);  //0,1,2
          //   console.log(value);//"a","b","c"
          // }
          //
          // includes 表示某个数组是否包含特定的值
          // 允许传入一个表示搜索的起始位置，默认为0
          // var result = arr.includes(3);  console.log(result);  //true
          // var result =  arr.includes(6);  console.log(result)  //false
          // var result = arr.includes(3,3);  console.log(result);  //false
          //
          // includes与indexOf有相通之处
          // if(arr.includes(3)>-1){
          //   console.log(true);  //true
          // }
          //
          // copyWithin 在当前数组内部将指定位置的成员复制到其它位置（会覆盖原有成员），直接改变当前数组。
          // 三个参数，从什么位置开始替换，start从该位置开始读取数据，end到该位置停止读取数据。
          // arr.copyWithin(0,3,4);
          // console.log(arr); //[4,2,3,4,5]
          //
          // fill 给定值填充一个数组,已有数据会被全部替换
          // 三个参数，替换的值，start开始位置，end结束位置
          // arr.fill(7);
          // console.log(arr); //[7,7,7,7,7]
          //
          // arr.fill(7,2,3);
          // console.log(arr); //[1,2,7,4,5]
          // fill的抹去填充功能和splice有相同作用之处
          // arr.splice(2,1,7);
          // console.log(arr); //[1,2,7,4,5]
        }
      },
      mounted() {
        this.operate();
      }
    }
</script>

<style scoped>

</style>

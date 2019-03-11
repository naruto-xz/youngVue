<template>
    <div>
      <div>{{title}}</div>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          title: "set和map结构"
        }
      },
      methods: {
        operate(){
          //Set
          //ES6提供了新的数据结构Set，它类似与数组，但成员是唯一的，没有重复，Set本身是一个构造函数，用来生成Set数据结构。
          // var set = new Set([1,2,3,3,4,4]);
          // var result = Array.from(set);
          // console.log(result); //[1,2,3,4]

          //Set的size属性用来判断Set实例成员的总数
          // console.log(set.size);  //4

          /**
           * Set的操作方法
           * add(value)：添加某个值，返回Set结构本身；
           * delete(value)：删除某个值，返回一个布尔值；
           * has(value)：某参数是否为Set成员，返回一个布尔值；
           * clear()：清除所有成员，没有返回值。
           */
          var set = new Set();
          // //添加
          // set.add(1);
          // set.add(2);
          // set.add(2);
          // console.log(set); //{1,2}
          // //删除
          // set.delete(2);
          // console.log(set); //{1}
          // //判断成员
          // set.has(1); //true
          // //清理
          // set.clear();

          /**
           * Set遍历方法 (Set的遍历顺序就是加入的顺序)
           * keys()：返回键名
           * values()：返回键值
           * entries()：返回键值对
           * forEach()：使用回调遍历成员
           */
          // var set = new Set(['a','b','c']);
          // for(let item of set.keys()){
          //   console.log(item);  //a,b,c
          // }
          // for(let item of set.values()){
          //   console.log(item);  //a,b,c
          // }
          // for(let item of set.entries()){
          //   console.log(item);  //["a", "a"],["b", "b"],["c", "c"]
          // }
          // set.forEach((value,key)=>{
          //   console.log(value); //a,b,c
          // });
          //注意：
          // 1.由于set结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys和values方法的行为完全一致。
          // 2.Set结构实例默认可以遍历，可以省略values()方法
          // 3.扩展运算符（...）内部使用for...of循环，所以也可以用于Set结构,转换为数组非常方便
          // for(let item of set){
          //   console.log(item);  //a,b,c
          // }
          // console.log([...set]);  // ['a','b','c']

          //Map
          //ES6提供了新的数据结构Map,它类似于对象，也是键值的集合，但是“键”的返回不限于字符串，各种类型的值都可以当做键。Map本身也是一个构造函数，用于生成Map结构。
          // var map = new Map();
          // map.set(2,"content");
          // console.log(map); //{2 => "content"}
          // console.log(map.get(2));  //content

          //Map的size属性用来判断Map实例成员的总数
          // console.log(map.size);  //1

          /**
           * Map的操作方法
           * set(key,value)：设置键值对，返回Map结构本身,如果key已有值，则键值会被更新；
           * get(key)：对取key对应的键值，如果找不到key,则返回undefined
           * delete(key)：删除某个键，返回一个布尔值；
           * has(key)：某键是在Map数据结构中，返回一个布尔值；
           * clear()：清除所有成员，没有返回值。
           */
          // set(key,value)
          // var map = new Map();
          // map.set(1,"a");
          // map.set(2,"b");
          // get(key)
          // map.get(1); //a
          // delete(key)
          // map.delete(2);
          // has(key)
          // map.has(1); //true
          // clear()
          // map.clear();

          /**
           * Map遍历方法  (Map的遍历顺序就是加入的顺序)
           * keys()：返回键名
           * values()：返回键值
           * entries()：返回键值对
           * forEach()：使用回调遍历成员
           */
          // var map = new Map([
          //   [1,'one'],
          //   [2,'two']
          // ]);
          // for(let item of map.keys()){
          //   console.log(item);  //1,2
          // }
          // for(let item of map.values()){
          //   console.log(item);  //"one","two"
          // }
          // for(let item of map.entries()){
          //   console.log(item);  //[1,'one'],[2,'two']
          // }
          // map.forEach((value,key)=>{
          //   console.log(value); //"one","two"
          // })
          //注意：
          //1.Map可以接受一个数组作为参数，该数组的成员是一个个表示键值对的数组；
          //2.扩展运算符（...）内部使用for...of循环，所以也可以用于Map结构,转换为数组非常方便
          // var map = new Map([
          //   [1,'one'],
          //   [2,'two']
          // ]);
          // console.log([...map.values()]); //["one", "two"]
        }
      },
      mounted() {
        this.operate();
      }
    }
</script>

<style scoped>

</style>

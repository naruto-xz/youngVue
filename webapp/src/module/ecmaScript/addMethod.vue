<template>
  <div>
    <h4>{{title}}</h4>
  </div>

</template>

<script>
    export default {
      data(){
        return {
          title: "es5新增方法"
        }
      },
      methods: {
        // forEach是Array新方法中最基本的一个，就是遍历，循环。
        // forEach方法中的function回调支持3个参数，第1个是遍历的数组内容；第2个是对应的数组索引，第3个是数组本身。
        // 注意：foreach不会返回新的值，所有一般操作就放在循环体内完成（如；赋值，改变变量值等）；
        foreach(){
          var arr = [1,2,3,4];
          arr.forEach((value,index,arr)=>{
            console.log(value*2);  //2
            console.log(index); //0
            console.log(arr); //[1,2,3,4]
          });
          console.log(arr); //[1,2,3,4]
        },
        //map方法的作用不难理解，“映射”嘛，也就是原数组被“映射”成对应新数组。
        //map方法中的function回调也支持3个参数，第1个是遍历的数组内容；第2个是对应的数组索引，第3个是数组本身。
        //注意：与foreach不同的是map方法会返回一个新数组，并且不会改变老数组
        map(){
          var arr = [1,2,3,4];
          var arr1 = arr.map((item,index,arr)=>{
            console.log(item*2);  //2
            console.log(index); //0
            console.log(arr); //[1,2,3,4]
            return item*2;
          });
          console.log(arr); //[1,2,3,4]
          console.log(arr1);  //[2,4,6,8]
        },
        //filter为“过滤”、“筛选”之意。指数组filter后，返回过滤后的新数组。
        //函数需要返回布尔值true或false,true才会返回，false的会被过滤
        filter(){
          var arr = [1,2,3,4];
          var arr1 = arr.filter(item=>item%2==0);
          console.log(arr);   //[1,2,3,4]
          console.log(arr1);  //[2,4]
        },
        //reduce方法接收一个函数作为累加器（accumulator），数组中的每个值从左到右开始合并，最终为一个值。
        //reduce方法中的function回调支持4个参数，之前值、当前值、索引值以及数组本身。
        //初始值若指定，则当作最初使用的pre值；如果缺省，则使用数组的第一个元素作为pre初始值，同时cur往后排一位,相比有初始值少一次迭代
        reduce(){
          var arr = [1,2,3,4];
          var result = arr.reduce((pre,cur,index,arr)=>{
           return pre + cur
          },1);
          console.log(result); //如果没有初始值，结果则为10
          console.log(result); //如有初始值结果则为11

          // var obj = {};
          // var arr = [{name:"a",age:1},{name:"a",age:1},{name:"b",age:3}];
          // var arr1 = arr.reduce((pre,cur)=>{
          //   obj[cur.name] ? "" : obj[cur.name] = true && pre.push(cur);
          //   return pre;
          // },[]);
          // console.log(arr1);  //[{name:"a",age:1},{name:"b",age:3}]
        },
        //some意指“某些”，指是否“某些项”合乎条件。有一个合乎则返回true,否则则返回false;
        //some方法中的function回调也支持3个参数，第1个是遍历的数组内容；第2个是对应的数组索引，第3个是数组本身。
        //注意：some要求至少有1个值让callback返回true就可以了,与forEach进行判断，some只要有true即返回不再执行了。
        some(){
          var arr = [1,2,3,4];
          var result = arr.some((item,index,arr)=>{
            console.log(item);  //1
            console.log(index); //0
            console.log(arr); //[1,2,3,4]
            // return item>5;
            return item>2;  //item只会输出3，符合后就不走了。
          });
          console.log(arr); //[1,2,3,4]
          console.log(result);  //false
          console.log(result);  //true
        },
        //every意指“所有”，指是否“所有项”合乎条件。有一个不合乎则返回false,否则则返回true;
        //every方法中的function回调也支持3个参数，第1个是遍历的数组内容；第2个是对应的数组索引，第3个是数组本身。
        //注意：every要求所有值让callback返回true才可以,与some一样，every只要有false即返回不再执行了。
        every(){
          var arr = [1,2,3,4];
          var result = arr.every((item,index,arr)=>{
            console.log(item);  //1
            console.log(index); //0
            console.log(arr); //[1,2,3,4]
            // return item>2;  //false
            return item>0;  //
          });
          console.log(arr); //[1,2,3,4]
          console.log(result);  //false
          console.log(result);  //true
        }
      },
      mounted(){
        this.foreach();
        this.map();
        this.filter();
        this.reduce();
        this.some();
        this.every();
      }
    }
</script>

<style scoped>

</style>

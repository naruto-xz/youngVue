<!--<template>-->
    <!--<div>-->
      <!--&lt;!&ndash;<button @click="operate">debounce</button>&ndash;&gt;-->
      <!--&lt;!&ndash;<input id="one" type="text" />&ndash;&gt;-->
    <!--</div>-->
<!--</template>-->

<!--<script>-->
    <!--export default {-->
      <!--methods:{-->
        <!--operate(){-->
          <!--// var arr = [22,12,3,43,56,47,4];-->
          <!--// function handle(arr) {-->
          <!--//   // arr.sort();-->
          <!--//   // console.log(arr);  // [12, 22, 3, 4, 43, 47, 56]-->
          <!--// }-->
          <!--// handle(arr);-->

          <!--// function handle(arr){-->
          <!--//   arr.sort(function (a,b) {-->
          <!--//     return a-b;-->
          <!--//   });-->
          <!--//   console.log(arr);-->
          <!--// }-->
          <!--// handle(arr);-->

          <!--// function random() {-->
          <!--//   return Math.random()-0.5;-->
          <!--// }-->
          <!--// function handle(arr){-->
          <!--//   arr.sort(random);-->
          <!--//   console.log(arr);-->
          <!--// }-->
          <!--// handle(arr);-->

          <!--//-->
          <!--// var arr = [4,2,1,8,3];-->
          <!--//-->
          <!--// for (var i = 0; i<arr.length; i++){ //外层控制趟数-->
          <!--//   for(var j = 0; j<arr.length-i-1; j++){  //内层循环为当前i趟数 所需要比较的次数-->
          <!--//     if(arr[j]>arr[j+1]){-->
          <!--//       // debugger;-->
          <!--//       var temp = arr[j];-->
          <!--//       arr[j] = arr[j+1];-->
          <!--//       arr[j+1] = temp;-->
          <!--//     }-->
          <!--//   }-->
          <!--// }-->
          <!--// console.log(arr);-->


          <!--// function debounce() {-->
          <!--//   var time;-->
          <!--//   return function(){-->
          <!--//     clearTimeout(time);-->
          <!--//     time = setTimeout(function () {-->
          <!--//       console.log(123);-->
          <!--//     });-->
          <!--//   }-->
          <!--// }-->
          <!--// var res = debounce();-->
          <!--// res();-->






        <!--}-->
      <!--},-->
      <!--// mounted() {-->
      <!--//   // this.operate();-->
      <!--//-->
      <!--//   function debounce(fn,delay) {-->
      <!--//     var time;-->
      <!--//     return function(){-->
      <!--//       clearTimeout(time);-->
      <!--//       time = setTimeout(function () {-->
      <!--//         // fn.apply(this,arguments);-->
      <!--//         fn();-->
      <!--//       },delay);-->
      <!--//     }-->
      <!--//   }-->
      <!--//-->
      <!--//   document.getElementById('one').addEventListener('click', debounce(handle,1000));-->
      <!--//   function handle(){-->
      <!--//     console.log(this, Date.now());-->
      <!--//   }-->
      <!--//-->
      <!--//-->
      <!--//-->
      <!--//-->
      <!--// }-->
    <!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->

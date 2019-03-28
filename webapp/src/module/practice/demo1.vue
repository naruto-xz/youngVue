<template>
    <div>
      <h5>demo1</h5>
    </div>
</template>

<script>
    export default {
        methods:{
          operate(){

            // //1.克隆对象
            // var obj = {name:'zhangsan',age:23};
            // function cloneObject(object){
            //   var newObject = new Object();
            //   for(var i in object){
            //     newObject[i] = object[i];
            //   }
            //   return newObject;
            // }
            // var obj1 = cloneObject(obj);
            // obj1.name = 'lisi';
            // console.log(obj.name);  //zhangsan


            // function removeWithoutCopy(arr, item) {
            //   for(var i =0; i<arr.length; i++){
            //     if(arr[i] == item){
            //       arr.splice(i,1);
            //       i--
            //     }
            //   }
            //   console.log(arr);
            // }
            // removeWithoutCopy([1,2,2,3,4,2,2],2)

            // function duplicates(arr) {
            //   var obj = {};
            //   var arr1 = [];
            //   arr.forEach(function(value){
            //     obj[value] ? arr1.push(value) : obj[value] = true
            //   });
            //   // return arr1;
            //   console.log(arr1);
            // }
            // duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]);

           //  function functions(flag) {
           //    if (flag) {
           //      function getValue() { console.log('a') }
           //    } else {
           //      function getValue() { console.log('b') }
           //    }
           //
           //  }
           // functions(true);

            // function useArguments() {
            //   var total = 0;
            //  for(var i = 0; i<arguments.length; i++){
            //    total+=arguments[i];
            //  }
            // }
            // useArguments(1,2,3,4)

            // var obj =
            //   {
            //     greeting : str1,
            //     name : str2,
            //     sayIt : function(){return this.greeting + ", " + this.name;}
            //   };
            // return obj;

            function createModule(str1, str2) {
              var greeting = str1;
              var name = str2;
              return {
                greeting : greeting,
                name: name,
                sayIt: function(){
                  return greeting+ ','+ name;
                }
              }
            }
            var res = createModule('a','b');
            console.log(res.sayIt());



          }
        },
      mounted() {
          this.operate();
      }
    }
</script>

<style scoped>

</style>

<template>
    <div>
      <h5>{{title}}</h5>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          title: 'generator函数'
        }
      },
      methods: {
        operate() {
            function* eat() {
              yield "apple";
              yield "banana";
              return "orange";
            }
            var obj = eat();
            console.log(obj); //Generator{_invoke: ƒ}   generator遍历器对象
            console.log(obj.next());  //{value: "apple", done: false}
            console.log(obj.next());  //{value: "banana", done: false}
            console.log(obj.next());  //{value: "orange", done: true}
            console.log(obj.next());  //{value: undefined, done: true}

          // function* foo(x) {
          //   var y = 2 * (yield(x + 1));
          //   var z = yield (y / 3);
          //   return (x + y + z);
          // }
          // var a = foo(5);
          // console.log(a.next());
          // console.log(a.next(12));
          // console.log(a.next(13));
          // a.next(); //6
          // a.next(12); //8
          // a.next(13); //5+24+13 = 42


        },
        mounted() {
          debugger;
          this.operate();
        }
      }
    }
</script>

<style scoped>

</style>

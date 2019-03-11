<template>
    <div>
      <h5>{{title}}</h5>
    </div>
</template>

<script>
    import promise from "../promise";

    export default {
      data(){
        return {
          title: 'async函数',
        }
      },
      methods:{
        operate(){

          async function print(value,ms) {
            var result = await new Promise((resolve)=>{
              setTimeout(()=>{
                resolve(1);
              },ms)
            });
            console.log(result); //5秒后执行输出1
            return result;
          }
          print('hello',5000).then(res=>{
            console.log(res); //5秒后拿到返回结果输出hello
          })

          // async函数的的并行调用
          // function a(){
          //   return new Promise((resolve)=>{
          //     setTimeout(()=>{resolve(1)},2000)
          //   })
          // }
          // function b(){
          //   return new Promise((resolve)=>{
          //     setTimeout(()=>{resolve(2)},5000)
          //   })
          // }
          // async function print() {
          //   return await Promise.all(
          //     [
          //       a(),
          //       b()
          //     ]
          //   )
          // }
          // print().then(res=>{
          //   console.log(res); //并行执行，5秒回返回[1,2]
          // });


        }
      },
      mounted() {
        this.operate();
      }

    }
</script>

<style scoped>

</style>

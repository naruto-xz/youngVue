<template>
    <div>
      <input type="text" v-focus>
      <button v-test="age">test</button>
      <!--<button v-test="message">test</button>  &lt;!&ndash;可以传入一个对象字面量&ndash;&gt;-->
      <div v-color="background" style="width: 100px;height: 100px"></div>
      <button @click="change">改变颜色</button>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          age: 24,
          message:{
            name: "zhangsan",
            age: 23
          },
          background: "#ff0000"
        }
      },
      methods:{
        change(){
          // this.message.age++;
          this.age++;
          this.background = "#000";
        }
      },
      /*
      *自定义指令的选项是由几个钩子函数组成的
      * bind  只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
      * inserted  被绑定元素插入父节点时调用
      * update 所在组件的VNode 更新时调用，仅在 update 和 componentUpdated 钩子中可用,不论值是否变化。
      * componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。
      * unbind：只调用一次，指令与元素解绑时调用。
      * */
      /*自定义指令的每个钩子函数都有几个参数可用  (一般就只用el和value两个参数)
      * el 指令所绑定的元素，可以用来直接操作 DOM 。
      * binding 一个对象，包含以下属性：
      * name：指令名，不包括 v- 前缀。
      * value：指令的绑定值
      * oldValue：指令绑定的前一个值,仅在 update 和 componentUpdated 钩子中可用,无论值是否改变都可用。
      * expression：字符串形式的指令表达式。
      * */
      directives: {
        focus: {
          inserted(el){
            el.focus();
          }
        },
        test: {
          bind(el,binding){
            console.log(binding.name);  //test
            console.log(binding.value); //24
            console.log(binding.expression);  //age
            // console.log(binding.value.age);
          },
          update(el,binding){
            console.log(binding.oldValue);  //24
            console.log(binding.value); //25
            // console.log(binding.oldValue.age); 传入对象时新值和旧值是同时变化的
            // console.log(binding.value.age);
          },
          unbind(el){
            console.log("解除绑定");
          }
        },
        //函数简写  初始化bing和update时生效，无需关心其它钩子函数
        color(el,binging){
          el.style.background = binging.value;
        }

      }
    }
</script>

<style scoped>

</style>

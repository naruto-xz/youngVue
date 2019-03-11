<template>
    <div>
      <h5>{{title}}</h5>
      <div>
        <p>使用一个全局组件</p>
        <global-component></global-component>
      </div>
      <!--<div>-->
        <!--<p>使用一个局部组件</p>-->
        <!--<part-component></part-component>-->
      <!--</div>-->
      <div>
        <p>使用props传递数据</p>
        <props-component :msg1="message1" :msg2="message2"></props-component>
        <!--传递对象校验-->
        <!--<props-component :text="text" :count="count" :msg="message3"></props-component>-->
      </div>
      <!--<div>-->
        <!--<p>父子组件通信</p>-->
        <!--&lt;!&ndash;<father-son-component @add="sum"></father-son-component>&ndash;&gt;-->
        <!--<father-son-component v-model="total"></father-son-component>-->
        <!--<div>{{total}}</div>-->
      <!--</div>-->
      <!--<div>-->
        <!--<p>非父子组件通信</p>-->
        <!--<boy-component></boy-component>-->
        <!--<girl-component></girl-component>-->
      <!--</div>-->
      <!--<div>-->
        <!--<p>父链与子组件索引</p>-->
        <!--<button @click="chain">调用子组件</button>-->
        <!--<father-sun-chain ref="chain"></father-sun-chain>-->
      <!--</div>-->
      <!--<div>-->
        <!--<p>组件插槽</p>-->
        <!--<slot-component>-->
          <!--<div slot-scope="props">-->
            <!--<p>分发的内容</p>-->
            <!--<p>更多分发的内容</p>-->
            <!--<p slot="header">分发到对应的头部插槽去</p>-->
            <!--<p slot="footer">分发到对应尾部的插槽去</p>-->
            <!--<p>{{props.age}}</p>-->
          <!--</div>-->
        <!--</slot-component>-->
      <!--</div>-->
      <!--<div>-->
        <!--<p>动态组件</p>-->
        <!--<button v-for="item in arr" @click="change(item)">{{item}}组件</button>-->
        <!--<keep-alive>-->
          <!--<component :is="currentView"></component>-->
        <!--</keep-alive>-->
      <!--</div>-->
      <!--<div>-->
        <!--<p>异步组件</p>-->
        <!--<asyn-component></asyn-component>-->
      <!--</div>-->
      <!--<div>-->
        <!--<button @click="show">$nextTick</button>-->
        <!--<div id="next" v-if="isShow">{{next}}</div>-->
      <!--</div>-->

    </div>
</template>

<script>
    import partComponent from "./partComponent.vue"
    import propsComponent from "./propsComponent.vue"
    import fatherSonComponent from "./fatherSonComponent.vue"
    import boyComponent from "./boyComponent.vue"
    import girlComponent from "./girlComponent.vue"
    import fatherSunChain from "./fatherSunChain.vue"
    import slotComponent from "./slotComponent.vue"
    import componentA from "./componentA.vue"
    import componentB from "./componentB.vue"
    import asynComponent from "./asynComponent.vue"
    export default {
      components:{
        partComponent,
        propsComponent,
        fatherSonComponent,
        boyComponent,
        girlComponent,
        fatherSunChain,
        slotComponent,
        componentA,
        componentB,
        asynComponent
      },
      data(){
        return{
          title: "vue组件",
          message1: "传递字符串",
          message2: {
            name: "传递对象",
          },
          text: "传参校验",
          count: 3,
          message3: {
            name: "传递对象校验",
            checked: true
          },
          total:1,
          arr: ["componentA","componentB"],
          currentView: "componentA",
          age:22,
          isShow: false,
          next: "1"
        }
      },
      methods:{
        sum(v){
          this.total = v;
        },
        chain(){
          this.$refs.chain.add();
        },
        change(value){
          this.currentView =  value;
        },
        show(){
          this.isShow = true;
          // var result = document.getElementById("next");
          // console.log(result); //null
          this.$nextTick(()=>{
            var result = document.getElementById("next");
            console.log(result);  //<div id="next">1</div>
          });

        }
      },
      mounted() {

      }
    }
</script>

<style scoped>

</style>

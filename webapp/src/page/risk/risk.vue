<template>
    <div id="risk">
      <risk-header msg="架构" @startPlan="receive"></risk-header>
      <div>{{plan}}</div>
      <h3 class="risk_title">{{title}}</h3>
      <input type="text" v-model="newItems" @keyup.enter="addItem"/>
      <ul>
        <li v-for="item in items" :class="{'finished':item.isFinished}" @click="toggle(item)">
          {{item.label}}
        </li>
      </ul>
    </div>
</template>

<script>
  import riskHeader from '../../components/riskHeader'
  import store from '../../js/store'
    export default {    //export default 相当于new Vue(), 里面就是组件的一些属性
        name: "risk",
        components: {riskHeader},
        data: function () {
          return {
            title: 'this a to do list',
            items: store.fetch(),
            newItems: '',
            plan: ''
          }
        },
       methods: {
         toggle: function (item) {
          item.isFinished = !item.isFinished
        },
         addItem: function () {
           this.items.push({
             label: this.newItems,
             isFinished: false
           });
           this.newItems = ''
         },
         receive: function (data) {
            this.plan = data
         }
      },
      watch: {
        items:  {
          handler: function (value, oldValue) {   //handler方法会直接被执行的
            store.save(this.items);
          },
          deep: true  //保持数组内的属性被改变时，localStorage也发生变化
        }
      }
    }

</script>

<style scoped>
  #risk{
    margin: 0 auto;
    width: 50%;
    background: #dca4a4;
  }
  .risk_title{
    color: #d42020;
  }
  .finished{
    color: green;
  }
</style>

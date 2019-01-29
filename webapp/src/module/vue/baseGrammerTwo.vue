<template>
  <div>
    <h5>{{title}}</h5>
    <div>
      <p>插值</p>
      <div>{{tag}}</div>
      <div v-html="tag"></div>
      <button :id="id" :disabled="true">test特性</button>
      <div>{{number+1}}</div>
      <div>{{show ? "显示" : "隐藏"}}</div>
      <div>{{ message.split('').reverse().join('') }}</div>
    </div>
    <div>
      <p>内置指令</p>
      <ul>
        <li v-for="(value , key , index) in person ">
          {{value}} - {{key}} : {{index}}
        </li>
      </ul>
    </div>
    <div>
      <p>class样式</p>
      <div :class="{'success':success,'fail':fail}">成功或失败</div>
      <div :class="['default-color',color=='green'?'green-color':'']">test class 样式</div>
      <button :class="classes">利用计算属性绑定复杂样式处理</button>
    </div>
    <div>
      <p>过滤器</p>
      <div>{{date | formateDate}}</div>
      <div>{{date | partFormateDate}}</div>
    </div>
  </div>
</template>

<script>
    export default {
      data(){
        return {
          title: "vue基础语法二:DOM相关操作",
          tag: "<span>test html</span>",
          id:5,
          number:1,
          show: true,
          message: "abc",
          person:{
            name: 'Aresn',
            grender: '男',
            age:23
          },
          success: true,
          fail: false,
          color: "",
          size: 'large',
          disabled: true,
          date: "",
        }
      },
      computed:{
          classes(){
            return [
              'btn',
              "btn-"+this.size,
              {
                "btn-disabled": this.disabled
              }
            ]
          }
      },
      mounted() {
        this.color = "green";
        this.date = Date.now();
      },
      filters:{
        //注册一个局部过滤器
        partFormateDate(value){
          var date = new Date(value);
          return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
        }
      }
    }
</script>

<style scoped lang="less">
  .success{
    color: green;
  }
  .fail{
   color: red;
  }
  .default-color{
    color: gray;
  }
  .green-color{
    color: green;
  }
  .btn{
    font-size: 14px;
  }
  .btn-large{
    font-size: 20px;
  }
  .btn-disabled{
    cursor: not-allowed;
  }
</style>

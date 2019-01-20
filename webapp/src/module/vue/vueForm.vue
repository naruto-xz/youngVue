<template>
    <div>
      <div>
        <h5>表单基础应用</h5>
        <!--其实v-model是个语法糖-->
        <!--<input type="text" :value="message" @input="message = $event.target.value">-->
        <div>
          <input type="text" v-model="message1">
          {{message1}}
        </div>
        <div>
          <textarea  cols="30" rows="10" v-model="message2"></textarea>
          {{message2}}
        </div>
        <div>
          <input type="radio" :checked="ckecked">单个是否选中
          <input type="radio"  value="boy" v-model="sex" @change="getValue">男
          <input type="radio"  value="girl" v-model="sex">女
          <span>选中值为：{{sex}}</span>   <!--boy或girl-->
        </div>
        <div>
          <input type="checkbox"  value="Jack" v-model="checkedNames" @change="getValue">Jack
          <input type="checkbox"  value="John" v-model="checkedNames">John
          <input type="checkbox"  value="Mike" v-model="checkedNames">Mike
          <span>选中值为：{{checkedNames}}</span>  <!--["Jack","John"]-->
        </div>
        <div>
          <!--一般会都会自己扩展一个下拉框组件，或引用第三方框架的-->
          <select v-model="selectValue" @change="getValue">
            <option :value="item.value" v-for="item in arr" v-show="item.value">{{item.text}}</option>
          </select>
          <span>选中值为：{{selectValue}}</span>    <!--apple-->
        </div>
      </div>
      <div>
        <h5>修饰符</h5>
        <div>
          <p>lazy</p>
          <input type="text" v-model.lazy="msg">
          <span>当鼠标移开点击时触发change,才会改变值</span>{{msg}}
        </div>
        <div>
          <p>number</p>
          <input type="text" v-model.number="number">
          <span>输入之后会把字符串转换为数字类型{{typeof number}}</span>
        </div>
        <div>
          <p>trim</p>
          <input v-model.trim="msg">
          <span>去除用户前后输入的多余空格：{{msg}}</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          message1: "",
          message2: "",
          ckecked: true,
          sex: "",
          checkedNames:[], //多选框必须为数组
          arr: [
            {text: "请选择",value: ""},
            {text: "苹果",value: "apple"},
            {text: "香蕉",value: "banana"},
            {text: "橘子",value: "orange"},
          ],
          selectValue: "", //单选时显示框的内容取决于绑定的数据值

          msg: "",
          number: "",
        }
      },
      methods:{
        getValue(){
          console.log(this.sex);
          console.log(this.checkedNames);
          console.log(this.selectValue);
        }
      }
    }
</script>

<style scoped>

</style>

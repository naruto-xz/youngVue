<template>
    <div>
       <h5>html基础</h5>
       <div>
         <!--<div>音频</div>-->
         <!--<audio id="video" controls>-->
           <!--<source src="/static/audio/pmsound.mp3" type="audio/mpeg" />-->
           <!--<source src="/static/audio/pmsound.wav" type="audio/wav" />-->
         <!--</audio>-->

         <!--其实v-model是个语法糖-->
         <!--<input type="text" :value="message" @input="message = $event.target.value">-->
         <!--<input type="text" v-model="message">-->

         <!--<textarea  cols="30" rows="10" v-model="message2"></textarea>-->

         <!--<input type="radio" value="男" v-model="sex">男-->
         <!--<input type="radio" value="女" v-model="sex">女-->

         <!--<input type="checkbox" value="足球" v-model="sport">足球-->
         <!--<input type="checkbox" value="篮球" v-model="sport">篮球-->
         <!--<input type="checkbox" value="排球" v-model="sport">排球-->

         <select v-model="selectValue" @change="getValue">
           <option :value="item.value" v-for="item in arr" v-show="item.value">{{item.text}}</option>
         </select>

         <button @click="getValue">取值</button>

       </div>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          message: '',
          message2: '',
          sex: '',
          sport: [], //必须为数组
          arr: [
            {text: "请选择",value: ""},
            {text: "苹果",value: "apple"},
            {text: "香蕉",value: "banana"},
            {text: "橘子",value: "orange"},
          ],
          selectValue: ''
        }
      },
      methods:{
        operate(){

        },
        getValue(){
          console.log(this.message);
          console.log(this.message2);
          console.log(this.sex);
          console.log(this.sport);
          console.log(this.selectValue);
        }
      },
      mounted() {
        this.operate();
      }

    }
</script>

<style scoped>

</style>

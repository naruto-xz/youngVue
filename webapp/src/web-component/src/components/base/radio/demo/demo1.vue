<template>
	<div>
		<np-radio ref="radio" v-model="v" :options="options" @change="change"></np-radio>
		{{v}}
	</div>
</template>
<script>
import npRadio from "../index.vue"
export default {
  components:{
    npRadio
  },
	methods: {
		change(v) {
		  console.log("广播出来的值"+v);
    }
	},
	data() {
		return {
			v: "2",
			options: {
				disabled: false,
				// manner: "button",  //提供一种风格，圆点(default)或按钮(button)
				size: "small",
				// enum: "SEX"
        data: {
          '1' : '男',
          '2' : '女',
          '3' : '未知'
        }
			}
		};
	}
};
</script>

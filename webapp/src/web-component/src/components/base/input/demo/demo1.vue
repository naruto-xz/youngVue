<template>
	<div>
		<!--<np-input v-model="v" :options="options" @input="inputHandle"></np-input>-->
		<np-input v-model="v" :options="options" @input="inputHandle"></np-input>
		<div>{{v}}</div>
	</div>
</template>

<script>
import npInput from "../index.vue"
export default {
  components:{
    npInput
  },
	methods: {
		inputHandle(v) {
      console.log("输入时操作输入值"+v);
    }
	},
	data() {
		return {
			v: "",
			options: {
				type: "text",
				placeholder: "当前为空，请输入",
        disabled: false,
        readonly: false,  //设置为只读属性，不可操作
        maxlength: 5,
        className: "input-class-name",   //可自己添加自定义样式
        size: "small",   //size属性指定输入框的尺寸，除了默认的大小外(40px)，还提供了large(40px)、small(32px) 和 mini(28px) 三种尺寸。
        // style: "width:200px"  // 可自定义内联样式
        // icon: "el-icon-search",
        // icon: "xui-icon xui-icon-addressbook_fill",
			// 	prepend: {
			// 		style: "width:100px",
			// 		placeholder: "请选择",
			// 		data: {
			// 			"1": "地址",
			// 			"2": "电话"
			// 		}
			// 	},
        prepend: "前置字符操作",  //配成字符串就子展示单个按钮类型的功能
        prependClick(v, options) {
				  debugger;
        	return +v + 1 + "";
        },
				// append: {
				// 	style: "width:100px",
				// 	placeholder: "请选择",
				// 	data: {
				// 		"1": "地址",
				// 		"2": "电话"
				// 	}
				// },

				// default : '2',
				// append: "点击发送",
				// appendClick(v, options) {
				// 	return +v + 1 + "";
				// },
				// tips: "老板,来碗油泼面"
			}
		};
	}
};
</script>
<style lang="less">
  /*.input-class-name{*/
    /*width: 200px;*/
  /*}*/
</style>

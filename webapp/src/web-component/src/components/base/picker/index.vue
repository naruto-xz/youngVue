<template>
	<!--<div>-->
		<!--<picker-scroll ref="scroll">-->
			<!--<slot></slot>-->
		<!--</picker-scroll>-->
	<!--</div>-->

  <div v-show="visible" :class="['xui-picker xui-picker-style']">
    <!--<picker-scroll ref="scroll">-->
        <slot></slot>
    <!--</picker-scroll>-->
  </div>

</template>
<script>
import Popper from "./popper.js";
// import pickerScroll from "../scroll";

export default {
	// components: {
	// 	pickerScroll
	// },
	props: {
		placement: {
			type: String,
			default: "bottom-start"
		},
	},
	data() {
		return {
			visible: false,
			popper: null
		};
	},
	methods: {
		init() {
			if (!this.$parent.$refs.reference) {  //挂载必须有参考父节点
				console.error(`未找到picker挂载目标，请在父组件中指定：ref="reference"`);
			}
			if (this.popper) {
			  return;
			} else {
					this.popper = new Popper(this.$parent.$refs.reference, this.$el, {
						placement: this.placement,  //默认在下方
						modifiers: {
							computeStyle: {
								gpuAcceleration: false
							},
							preventOverflow: {
								boundariesElement: "window"
							}
						},
						onCreate: () => {
						  // console.log("start"); //创建的时候走
              // this.popper.update();  //可以调用更新
						},
						onUpdate: () => {
              // console.log("update"); //更新的时候走
						}
					});
          this.visible = true;
			}
		},
		update() {
			this.popper && this.popper.update();  //提供一个对外更新当前popper的操作
		},
		toggle() {
      this.init();
      document.addEventListener("click", this.closeDropdown); //提供一个全局的点击事件，用来关闭下拉框
		},
		closeDropdown() {   //隐藏，销毁操作
			this.visible = false;
			document.removeEventListener("click", this.closeDropdown);
			this.popper = null; //销毁下拉框
		},
	},
	mounted() {
		  //this.$el是一个新的当前vue实例
		  //把这个新的实例添加到body元素节点中成为其子节点，但是放在body的现有子节点的最后
			document.body.appendChild(this.$el);
	},
	// watch: {
	// 	visible(v) {
	// 		this.$emit("visible", v);
	// 	}
	// }
};
</script>
<style lang="scss">
.xui-picker {
	min-width: inherit;
	overflow: auto;
	margin-top: 2px;
	padding: 0px;
	background-color: #fff;
	box-sizing: border-box;
	border-radius: 4px;
	box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
	z-index: 1000;
}
</style>

